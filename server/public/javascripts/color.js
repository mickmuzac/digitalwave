var socket = io.connect("http://localhost:4001/");

// Detect a color change, and change the background on it.
socket.on('colorchange', function (data) {
  new_color = data.color;
  $('#main_page').css('background-color', new_color);
});

