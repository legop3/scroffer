# Scroffer
a thing to turn off all your screens.

## Requirements
- Nodejs and NPM
- git
- A network that allows UDP broadcasts (most do)
- Multiple computers on this network
- Windows or Linux with KDE plasma or Gnome on Wayland


## Installation
Download this repository using git:

    git clone https://github.com/legop3/scroffer.git

Change to the `scroffer` directory
Use NPM to install dependencies

    npm install

## Configuration
1. Make yourself a copy of `config.json.example` and name it `config.json`
2. Open config.json in your favorite text editor
   1. Set the interface address (You can probably just leave it as `0.0.0.0`)
   2. Set the port for the web interface
   3. Set the OS for this client. Your options as of now are `windows10`, `linux/plasma/wayland`, and `linux/gnome/wayland`

## Running the server
Be sure you are in the project's directory and run `node server.js`

## Running the client
Be sure you are in the project's directory and run `node client.js`

## Usage
1. Navigate to your web interface, this will be the IP address of your server and the port you set in `config.json`
   - Example: http://192.168.0.25:3621
2. Press the ON or OFF buttons to broadcast the ALL/ON or ALL/OFF signals over your network
3. Your clients, if configured properly, should respond the button presses.