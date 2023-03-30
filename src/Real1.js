import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Real1 = () => {
  const [data, setData] = useState([
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 300 },
    { name: "May", value: 400 },
    { name: "Jun", value: 250 },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate new data point
      const newDataPoint = {
        name: new Date().toLocaleTimeString(),
        value: Math.floor(Math.random() * 500),
      };

      // Update data state with new data point
      setData((prevData) => [...prevData.slice(-5), newDataPoint]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default Real1;
