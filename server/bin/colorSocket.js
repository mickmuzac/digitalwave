var totalColors = 18;
var totalSchemes = 2;

var colorsPerSec = 1; //Number of color changes per second
var timeSchemeSwitch = 30; //Seconds between scheme changes

var index = 0; //color index
var scheme = 0; //scheme index

var io;

exports.start = function(server){
  io = require('socket.io')(server);

  // Pass in a connection
  io.on('connection', function (socket) {
    console.log("Connected!");
    socket.emit('both', `${index},${scheme}`);
  });

  global.setInterval(increment, 1/colorsPerSec * 1000);
  global.setInterval(incrementScheme, timeSchemeSwitch * 1000);
}

function incrementScheme(){
  scheme = (scheme + 1) % totalSchemes;
  io.emit('scheme', scheme);
}

function increment(){
    index = (index + 1) % totalColors;
    io.emit('both', `${index},${scheme}`);
}
