import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {Chart} from 'chart.js';

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] });
    
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('salesData', (data) => {
      setSalesData(salesData => [...salesData, data]);
    });

    return () => {
      socket.disconnect();
      console.log('Disconnected from server');
    }
  }, []);

  useEffect(() => {
    const salesChart = new Chart('sales-chart', {
      type: 'line',
      data: {
        labels: salesData.map((data) => new Date(data.time).toLocaleTimeString()),
        datasets: [{
          label: 'Sales',
          data: salesData.map((data) => data.amount),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'minute'
            },
            distribution: 'linear'
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });

    return () => {
      salesChart.destroy();
    };
  }, [salesData]);

  return (
    <div>
      <h2>Sales Chart</h2>
      <canvas id="sales-chart"></canvas>
    </div>
  );
}

export default SalesChart;
