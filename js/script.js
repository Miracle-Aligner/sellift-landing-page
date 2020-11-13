let movedUp = false;
let currentFloor = 0;
let floorCountArr = [ "00", "0 1", "02", "03", "04", "05", "06", "RT"]


window.move_up = function() {
	console.log(currentFloor);

	closeDoors();

	prevFloor = currentFloor;
	currentFloor++;
	
	
	setTimeout(function() {
		hidePrevFloor();
		showCurrFloor();
		if (currentFloor == 7){

			var up = document.getElementsByClassName("nav-up");
			var down = document.getElementsByClassName("nav-down");
			var i;
			for (i = 0; i < up.length; i++) {
				up[i].classList.add("disabled");
				down[i].classList.remove("disabled");
			}
			/*
			$('#nav-up').addClass('disabled');
			$('#nav-down').removeClass('disabled');
			*/
			$('#lamps-block').addClass('hidden');
			$('#main-block').addClass('hidden');

			movedUp = true;
		}

		else if (currentFloor != 7 && movedUp == true){
			var up = document.getElementsByClassName("nav-up");
			var i;
			for (i = 0; i < up.length; i++) {
				up[i].classList.remove("disabled");
			}

			/*$('#nav-up').removeClass('disabled');*/
			$('#lamps-block').removeClass('hidden');
			$('#main-block').removeClass('hidden');
		}

		console.log("Prev: " + prevFloor);
		console.log("Cur: " + currentFloor);
	}, 500);


	setTimeout(function() {
		changeFloorCounter();
		openDoors();
	}, 400);

	
	
}

window.move_down = function() {
	console.log(currentFloor);

	prevFloor = currentFloor;
	currentFloor--;
	
	closeDoors();

	setTimeout(function() {
		hidePrevFloor();
		showCurrFloor();
		if (currentFloor == 0){
			/*$('#nav-down').addClass('disabled');*/
			var down = document.getElementsByClassName("nav-down");
			var i;
			for (i = 0; i < down.length; i++) {
				down[i].classList.add("disabled");
			}

		}
		else if (currentFloor != 7 && movedUp == true){
			var up = document.getElementsByClassName("nav-up");
			var i;
			for (i = 0; i < up.length; i++) {
				up[i].classList.remove("disabled");
			}

			/*$('#nav-up').removeClass('disabled');*/

			$('#lamps-block').removeClass('hidden');
			$('#main-block').removeClass('hidden');
		}

		console.log("Prev: " + prevFloor);
		console.log("Cur: " + currentFloor);
	}, 500);

	setTimeout(function() {
		changeFloorCounter();
		openDoors();
	}, 400);
}

function changeFloorCounter(){
	var element = document.querySelector("#floor-counter");
	element.innerHTML  = floorCountArr[currentFloor];
}	
		


function hidePrevFloor(){
	$("#floor-" + prevFloor).addClass('hidden');
}

function showCurrFloor(){
	$("#floor-" + currentFloor).removeClass('hidden');
}

function closeDoors() {
	$("#left-door").addClass('display-block');
	$("#right-door").addClass('display-block');

	setTimeout(function() {
		$("#left-door").addClass('left-door-moved');
		$("#right-door").addClass('right-door-moved');
	    
	}, 100);
}

function openDoors() {

	var delayInMilliseconds = 400; //1 second
	setTimeout(function() {
		$("#left-door").removeClass('left-door-moved');
		$("#right-door").removeClass('right-door-moved');

		setTimeout(function() {
			$("#left-door").removeClass('display-block');
			$("#right-door").removeClass('display-block');
		}, 300);
	}, delayInMilliseconds);
}