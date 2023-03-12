
const { exec } = require('child_process');
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
var config = require('./config.json')

socket.on('listening', function () {
	const address = socket.address();
	console.log('UDP socket listening on ' + address.address + ":" + address.port);
});

socket.on('message', function (message, remote) {
	console.log('CLIENT RECEIVED:', remote.address + ':' + remote.port +' - ' + message);
	// const response = "Hellow there!";
    console.log(remote)
	console.log(message.toString())

	if(message.toString() === 'ALL/OFF'){
		console.log('turning screen off..')
		if(config.ClientOS === 'windows10') {
			console.log('windows 10 selected')
		}
		if(config.ClientOS === 'linux/plasma/wayland'){
			console.log('linux plasma wayland selected')
			exec('kscreen-doctor -d off')
		}
		if(config.ClientOS === 'linux/gnome/wayland'){
			console.log('linux gnome wayland selected')
			exec('./scripts/dpms-gnome.sh 0')
		}
	}







	// socket.send(response, 0, response.length, remote.port, remote.address);
	console.log('')
});

socket.bind('5555', config.interface);