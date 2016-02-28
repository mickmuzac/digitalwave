var socket = io.connect();

function setColor(colorIndex){
  console.log("Set color", colorIndex);
  // $('#main_page').css('background-color', /* To-do */);
}

function setScheme(schemeIndex){
  console.log("Set scheme", schemeIndex);
  // $('#main_page').css('background-color', /* To-do */);
}

socket.on('color', setColor);
socket.on('scheme', setScheme);

socket.on('both', function (data) {
  var tempArr = data.split(",");
  var colorIndex = Number(tempArr[0]);
  var schemeIndex = Number(tempArr[1]);

  setScheme(schemeIndex);
  setColor(colorIndex);
});

document.getElementById('main_page').style.transition = 'background .5s';
document.getElementById('main_page').style.WebKitTransition = 'background .5s';
