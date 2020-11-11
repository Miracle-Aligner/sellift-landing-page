window.move = function() {
	if($('#left-door').hasClass('left-door-moved')) {
	    $('#left-door').removeClass('left-door-moved');
	}else{
	    $('#left-door').addClass('left-door-moved');
	    var delayInMilliseconds = 400; //1 second
		setTimeout(function() {
			$('#left-door').removeClass('left-door-moved');
		}, delayInMilliseconds);
	}

	if($('#right-door').hasClass('right-door-moved')) {
	    $('#right-door').removeClass('right-door-moved');
	}else{
	    $('#right-door').addClass('right-door-moved');
	    var delayInMilliseconds = 400; //1 second
		setTimeout(function() {
			$('#right-door').removeClass('right-door-moved');
		}, delayInMilliseconds);
	}
}