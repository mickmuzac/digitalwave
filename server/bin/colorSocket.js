var totalColors = 18;
var colorsPerSec = 3;

var index = 0;
var io;
var socket2;

exports.start = function(server){
  io = require('socket.io')(server);

  // Pass in a connection
  io.on('connection', function (socket) {
    console.log("Connected!");
    socket.emit('c', index);

    socket2 = socket;
    global.setInterval(increment, 1/colorsPerSec * 1000);
  });

}

function increment(){
    console.log("Emit!");
    index = (index + 1) % totalColors;
    socket2.emit('c', index);
}
