var socket = io.connect("http://localhost:4001/");

var team_colors = JSON.parse(localStorage.getItem('teamColors'));
socket.on('colorchange', function (data) {
  var color_hash = data.split(",");
  var scheme = parseInt(color_hash[0]);
  var pattern_id = parseInt(color_hash[1]);
  pattern_id += localStorage.getItem("radialSection");
  new_color = getColor(scheme, pattern_id);
  $('#main_page').css('background-color', new_color);
});

document.getElementById('main_page').style.transition = 'background .5s';
document.getElementById('main_page').style.WebKitTransition = 'background .5s';

function getColor(scheme, index) {
  var team_colors = JSON.parse(localStorage.getItem('teamColors'));
  var max_width = team_colors[scheme].length;
  var new_color = team_colors[scheme][index % max_width];
  console.log(new_color);
  return new_color
}