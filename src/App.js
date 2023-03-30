import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import RealTimeLineChart from './RealTimeLineChart';
import Real1 from './Real1';
import SalesChart from './SalesChart';
import LineChart from './LineChart';
import Header from './Header';
import './App.css';
import Description from './Description';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Real Time Chart</h1>
      <ErrorBoundary>
      <LineChart/>
    </ErrorBoundary>
    <h2 className='titre-un'>Description</h2>
    <Description/>
    </div>
    
    
  );
}

export default App;
