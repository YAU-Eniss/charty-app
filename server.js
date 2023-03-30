const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true,
};

app.use(cors(corsOptions)); 

app.get('/salesData', (req, res) => {
  res.json(salesData);
});

const server = http.createServer(app);
const io = socketIo(server, {
  cors: corsOptions,
});

let salesData = [];

io.on('connection', socket => {
  console.log('Client connected');
  socket.emit('salesData', salesData);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

let amount = 10;
let time = 0;
setInterval(() => {
  time = time + 2;
  amount += Math.floor(Math.random() * (amount/9)) - Math.floor(Math.random() * (amount/10)) + 1;
  if(amount < 0){
    amount = 0;
  }
  salesData.push({time, amount});
  salesData = salesData.slice(-20);
  io.emit('salesData', salesData); 
}, 2000);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
