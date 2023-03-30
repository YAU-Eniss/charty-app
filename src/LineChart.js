import React, { useEffect, useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import io from 'socket.io-client';
import './LineChart.css';

const Chart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('salesData', (incomingData) => {
      setData((prevData) => {
        const newData = [...prevData, incomingData];
            if (newData.length > 10) {
          newData.shift();
        }
        return newData;
      });
      
    });
    
  }, []);

  

  return (
    <LineChart margin ={{top: 15, right: 5, left: 180, bottom: 5}} width={900} height={500} data={data[0]} >
      <CartesianGrid stroke="#D3D3D3" strokeDasharray="1 1" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" stroke="#4285F4"  strokeWidth={1.5} activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default Chart;
