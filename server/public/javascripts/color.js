document.getElementById('main_page').style.transition = 'background .5s';
document.getElementById('main_page').style.WebKitTransition = 'background .5s';

var socket = io.connect();

socket.on('both', function (data) {
  var tempArr = data.split(",");
  var colorIndex = Number(tempArr[0]);
  var schemeIndex = Number(tempArr[1]);

  schemeIndex += localStorage.getItem("radialSection");
  new_color = getColor(scheme, schemeIndex);
  $('#main_page').css('background-color', new_color);
});

function getColor(scheme, index) {
  var team_colors = JSON.parse(localStorage.getItem('teamColors'));
  var max_width = team_colors[scheme].length;
  var new_color = team_colors[scheme][index % max_width];
  return new_color;
}