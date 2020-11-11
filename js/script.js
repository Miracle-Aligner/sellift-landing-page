window.move = function() {
	if($('#left-door').hasClass('left-door-moved')) {
	    $('#left-door').removeClass('left-door-moved');
	}else{
		
		$('#left-door').addClass('display-block');

		setTimeout(function() {
			$('#left-door').addClass('left-door-moved');
		    var delayInMilliseconds = 400; //1 second
			setTimeout(function() {
				$('#left-door').removeClass('left-door-moved');

				setTimeout(function() {
					$('#left-door').removeClass('display-block');
				}, 300);
			}, delayInMilliseconds);
		}, 100);

	    
	}

	if($('#right-door').hasClass('right-door-moved')) {
	    $('#right-door').removeClass('right-door-moved');
	}else{
		$('#right-door').addClass('display-block');
		setTimeout(function() {
		    $('#right-door').addClass('right-door-moved');
		    var delayInMilliseconds = 400; //1 second
			setTimeout(function() {
				$('#right-door').removeClass('right-door-moved');

				setTimeout(function() {
					$('#right-door').removeClass('display-block');
				}, 300);
			}, delayInMilliseconds);
		}, 100);
	}
}