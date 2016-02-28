
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
    current_section = self.sections[section_id];
    if(current_section) {
      return current_section;
    }
    // Just give them the zeroth row if it doesn't work.
    return '0';
  }
}

submitseat.onclick = storeSeatNumber;

function storeSeatNumber(){
	localStorage.setItem("seatnumber", seatnumber.value);
	localStorage.setItem("rownumber", rownumber.value);
	localStorage.setItem("sectionnumber", sectionnumber.value);
	localStorage.setItem("radialSection", SeatDetection.getSection(sectionnumber.value));
}
