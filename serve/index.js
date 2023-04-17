const { response } = require('express/lib/express');
const { request } = require('http');
const { Socket } = require('net');

var app = require('express')();

var http = require("http").createServer(app);
var io = require('socket.io')(http);


app.get('/view',(request,response)=>{
    response.sendFile( __dirname + '/display.html');
})
io.on('connection',(Socket)=>{
    Socket.on("join-message",(roomId)=>{
        Socket.join(roomId);
        console.log('user joind a room : '+ roomId )
    })
})

var server_port = process.env.YOUR_PORT ||process.env.PORT||5000;

http.listen(server_port, ()=>{
    console.log("Started on: " +server_port);
})