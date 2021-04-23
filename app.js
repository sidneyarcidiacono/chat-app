require('dotenv').config()
const express = require('express')
const path = require('path')
const http = require('http');
const app = express()
const server = http.createServer(app);

const { Server } = require('socket.io')
const io = new Server(server)

const mainRoutes = require('./routes/main')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

server.listen(3000, () => {
  console.log('CONNECTED')
})
