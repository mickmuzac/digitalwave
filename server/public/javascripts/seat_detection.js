
/**
 * We'll set up an array and split up the seating arrangements radially
 * for the Amway Center.
 */

var sections = {};

// List of sections and their associated row.
// We want to fire these off after they do a search.
var radial_sections = [
  ['101','201','202','232'],
  ['102','203','204'],
  ['103','205'],
  ['104', 'C-A', 'C-B', '206', '207'],
  ['105', 'C-C', '208', '209'],
  ['106', 'C-D'],
  ['107', 'C-E', 'C-F', '210', '211', '212'],
  ['108', '213', '214'],
  ['109', '109A', '215', '216'],
  ['110', '110A', '217'],
  ['111', '111A', '218', '219','220'],
  ['112', '221', '222', 'A', 'B'],
  ['113', 'C', 'D', 'E', '223', '224'],
  ['114', 'F','G','225'],
  ['115', 'H', 'I', '226'],
  ['116', 'J', 'K', 'L','M', '227' , '228'],
  ['117', '229', '230'],
  ['118', '231']
];


for(color_key in radial_sections) {
  for(sect in radial_sections[color_key]) {
    var section_id = radial_sections[color_key][sect]
    sections[section_id] = color_key;
  }
}

var SeatDetection = {
  sections: sections,
  getSection: function(section_id) {
    section_id = section_id.toUpperCase().trim();
    current_section = self.sections[section_id];
    if(current_section) {
      return current_section;
    }
    // Just give them the zeroth row if it doesn't work.
    return '0';
  }
}

submitseat.onclick = storeSeatNumber;

function storeSeatNumber(e){
  e.preventDefault();

  var sectionnumber = $("#sectionnumber").val();
	localStorage.radialSection = SeatDetection.getSection(sectionnumber);

  function loadTeamColors() {
    // 0: Orlando Magic 360
    // 1: Orlando Magic Alternating
    // 2: Solar Bears Orange 360
    // 3: Solar Bears Orange Alternating
    // 4: Solar Bears Purple 360
    // 5: Solar Bears Purple Alternating
    var team_colors = [
      ["#005ca3", "#0074cc", "#008bf5", "#1f9eff", "#47afff", "#70c1ff", "#99d3ff", "#c2e4ff", "#ebf6ff", "#fff", "#ebf6ff", "#c2e4ff", "#99d3ff", "#70c1ff", "#47afff", "#1f9eff", "#008bf5", "#0074cc"],
      ["#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff", "#005ca3", "#fff"],
      ["#f36717", "#f47a34", "#f68d51", "#f79d69", "#f9b086", "#fac3a3", "#fbd3bb", "#fde6d8", "#fef9f5", "#fff", "#fef9f5", "#fde6d8", "#fbd3bb", "#fac3a3", "#f9b086", "#f79d69", "#f68d51", "#f47a34" ],
      ["#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff", "#f36717", "#fff"],
      ["#4b2a91", "#5c34b2", "#6c41c8", "#8461d1", "#9a7dd9", "#b29ce2", "#c8b8ea", "#ddd4f2", "#f6f3fc", "#fff", "#f6f3fc", "#ddd4f2", "#c8b8ea", "#b29ce2", "#9a7dd9", "#8461d1", "#6c41c8", "#5c34b2"],
      ["#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff", "#4b2a91", "#fff"]
    ];
    localStorage.setItem('teamColors', JSON.stringify(team_colors));
  }

  loadTeamColors();
  $('form').submit();
}

function disableCamera() {
  document.getElementById('hascamera').value = false;
}
function enableCamera() {
  document.getElementById('hascamera').value = true;
}

var constraints = {
  audio: false,
  video: true
};

if(navigator.getUserMedia) navigator.getUserMedia(constraints, enableCamera, disableCamera);
else disableCamera(new Error("navigator.getUserMedia not found"));
