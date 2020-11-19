let movedUp = false;
let currentFloor = 0;
let floorCountArr = [ "00", "0 1", "02", "03", "04", "05", "06", "RT"]


window.move_up = function() {
	console.log(currentFloor);

	
	$("html, body").animate({ scrollTop: 0 }, "fast");

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

	if (currentFloor == 4){
		setTimeout(function() {
			var hide = document.getElementsByClassName("f4-hide");
			var show = document.getElementsByClassName("f4-show");
			var i;
			for (i = 0; i < hide.length; i++) {
				hide[i].classList.add("hidden");
				show[i].classList.remove("hidden");
			}
			document.getElementById("exhibitionist").src="./img/f4-man-open.png";
		}, 1000);
	}

	if (currentFloor == 5){
		var hide = document.getElementsByClassName("f4-hide");
		var show = document.getElementsByClassName("f4-show");
		var i;
		for (i = 0; i < hide.length; i++) {
			hide[i].classList.remove("hidden");
			show[i].classList.add("hidden");
		}
	}
	
}

window.move_down = function() {
	console.log(currentFloor);

	$("html, body").animate({ scrollTop: 0 }, "fast");

	prevFloor = currentFloor;
	currentFloor--;

	if (currentFloor == 0){
		
		$("#start-left-door").removeClass('start-left-door-moved');
		$("#start-right-door").removeClass('start-right-door-moved');

		setTimeout(function() {
			$("#start-left-door").removeClass('hidden');
			$("#start-right-door").removeClass('hidden');
			$("#start-button-div").removeClass('hidden');
			$("#start-button-div-mobile").removeClass('hidden');
		}, 300);

		changeFloorCounter();
		return;
	}
	
	closeDoors();
	changeFloorCounter();


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

	if (currentFloor == 4){
		setTimeout(function() {
			var hide = document.getElementsByClassName("f4-hide");
			var show = document.getElementsByClassName("f4-show");
			var i;
			for (i = 0; i < hide.length; i++) {
				hide[i].classList.add("hidden");
				show[i].classList.remove("hidden");
			}
			document.getElementById("exhibitionist").src="./img/f4-man-open.png";
		}, 1000);
	}

	if (currentFloor == 5){
		var hide = document.getElementsByClassName("f4-hide");
		var show = document.getElementsByClassName("f4-show");
		var i;
		for (i = 0; i < hide.length; i++) {
			hide[i].classList.remove("hidden");
			show[i].classList.add("hidden");
		}
	}


}

window.init_lift = function() {
	console.log(currentFloor);

	
	$("html, body").animate({ scrollTop: 0 }, "fast");

	prevFloor = currentFloor;
	
	
	setTimeout(function() {
		showCurrFloor();
		
		console.log("Prev: " + prevFloor);
		console.log("Cur: " + currentFloor);
	}, 500);


	setTimeout(function() {
		changeFloorCounter();
		var delayInMilliseconds = 400; 
		setTimeout(function() {
			
			$("#start-button-div").addClass('hidden');
			$("#start-button-div-mobile").addClass('hidden');
			$("#start-left-door").addClass('start-left-door-moved');
			$("#start-right-door").addClass('start-right-door-moved');

			setTimeout(function() {
				$("#start-left-door").addClass('hidden');
				$("#start-right-door").addClass('hidden');
			}, 300);
		}, delayInMilliseconds);
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

function open_description(moduleNumber) {

	var moduleDesc = document.getElementById("desc-m" + moduleNumber);

	if (moduleDesc.classList.contains('hidden')) {
	    moduleDesc.classList.remove("hidden");
	    $("#b-" + moduleNumber).addClass('f2-open-button-active');
	}

	else
	{
		moduleDesc.classList.add("hidden");
		$("#b-" + moduleNumber).removeClass('f2-open-button-active');
	}
}