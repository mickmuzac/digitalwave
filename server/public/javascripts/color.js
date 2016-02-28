var socket = io.connect("http://localhost:4001/");

socket.on('colorchange', function (data) {
  new_color = data.color;
  $('#main_page').css('background-color', new_color);
});

//document.getElementById.querySelector('main_page').style.transition = 'background 5s';
//document.getElementById.querySelector('main_page').style.WebKitTransition = 'background 5s';
