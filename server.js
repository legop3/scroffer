const dgram = require('dgram');
// const message = new Buffer('Server?');
const socket = dgram.createSocket('udp4');
const express = require('express');
const http = require('http');

const app = express()

http.createServer(app).listen(3621, ()=>{console.log('server is running at port 3621')})



socket.on('listening', function () {
	socket.setBroadcast(true);
	// setInterval(() => {
	// 	socket.send(message, 0, message.length, 5555, '255.255.255.255');
	// }, 5000);
});

socket.on('message', function (message, remote) {
	console.log('CLIENT RECEIVED: ', remote.address + ':' + remote.port +' - ' + message);
});


app.get('/test', (req, res)=>{
    console.log('test request')
    const response = 'test broadcast from server'
	socket.send(response, 0, response.length, 5555, '255.255.255.255');
    res.send('okay')
})

socket.bind('8888');