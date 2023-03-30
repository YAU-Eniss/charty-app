import React from 'react'
import './Description.css';

export default function () {
  return (
    <div>
        <p className='parag'>This is a sample of React code to illustrate the work done over 5 days.
        Firstly, I started by creating a React application after installing Node JS.
        Then, I proceeded to create my first "Hello World!" components.
        After that, I researched the available charting libraries for React and began creating my first graphs using Recharts.
        Next, I decided to create a chart that receives and displays real-time data from a server,
        so I had to develop a backend server with Node JS that generates data every two seconds and emits it via socket.io,
        then the graph displays it instantaneously as shown above. The last step was to add a little bit of CSS to the front-end application.</p>
    </div>
  )
}
