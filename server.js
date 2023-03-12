const dgram = require('dgram');
// const message = new Buffer('Server?');
const socket = dgram.createSocket('udp4');
const express = require('express');
const http = require('http');
var config = require('./config.json')


const app = express()

http.createServer(app).listen(config.webport, ()=>{console.log(`server is running at port ${config.webport}`)})



socket.on('listening', function () {
	socket.setBroadcast(true);
	// setInterval(() => {
	// 	socket.send(message, 0, message.length, 5555, '255.255.255.255');
	// }, 5000);
});

socket.on('message', function (message, remote) {
	console.log('SERVER RECEIVED: ', remote.address + ':' + remote.port +' - ' + message);
});

app.use(express.static('staticweb'))

app.get('/test', (req, res)=>{
    console.log('test request')
    const response = 'test broadcast from server'
	socket.send(response, 0, response.length, 5555, '255.255.255.255');
    res.send('okay')
})

app.get('/screens/off', (req, res)=>{
	console.log('requesting screens to turn off')
	const udpsend = 'ALL/OFF'
	socket.send(udpsend, 0, udpsend.length, 5555, '255.255.255.255');
	res.send('requesting screens to turn off')
})

app.get('/screens/on', (req, res)=>{
	console.log('requesting screens to turn on')
	const udpsend = 'ALL/ON'
	socket.send(udpsend, 0, udpsend.length, 5555, '255.255.255.255');
	res.send('requesting screens to turn on')
})

socket.bind('8888', config.interface);