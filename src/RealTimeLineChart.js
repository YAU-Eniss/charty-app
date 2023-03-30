import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './RealTimeLineChart.css';

const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 300 },
  { name: "May", value: 400 },
  { name: "Jun", value: 250 },
];

const RealTimeLineChart = () => {
  return (
    <div className="center-div">
      <LineChart margin={
        { top: 5, right: 10, left: 120, bottom: 5 }
      } width={600} height={300} data={data}>
        <XAxis dataKey="name" />: 
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
    </div>
  );
};

export default RealTimeLineChart;
