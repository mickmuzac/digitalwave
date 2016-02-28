submitseat.onclick = storeSeatNumber;

function storeSeatNumber(){
	localStorage.setItem("seatnumber", seatnumber.value);
	localStorage.setItem("rownumber", rownumber.value);
	localStorage.setItem("sectionnumber", sectionnumber.value);
	
}
