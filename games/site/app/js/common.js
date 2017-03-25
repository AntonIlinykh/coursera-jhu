$(function() {

	//Slideout Menu
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});
	document.querySelector('.toggle-button').addEventListener('click', function() {
			slideout.toggle();
	});
	var fixed = document.querySelector('.navbar-header');

	slideout.on('translate', function(translated) {
		fixed.style.transform = 'translateX(' + translated + 'px)';
	});

	slideout.on('beforeopen', function () {
		fixed.style.transition = 'transform 300ms ease';
		fixed.style.transform = 'translateX(256px)';
	});

	slideout.on('beforeclose', function () {
		fixed.style.transition = 'transform 300ms ease';
		fixed.style.transform = 'translateX(0px)';
	});

	slideout.on('open', function () {
		fixed.style.transition = '';
	});

	slideout.on('close', function () {
		fixed.style.transition = '';
	});

	function close(eve) {
	eve.preventDefault();
	slideout.close();
	}

	slideout
		.on('beforeopen', function() {
			this.panel.classList.add('panel-open');
		})
		.on('open', function() {
			this.panel.addEventListener('click', close);
		})
		.on('beforeclose', function() {
			this.panel.classList.remove('panel-open');
			this.panel.removeEventListener('click', close);
		});

	slideout.disableTouch();

	//MagnificPopup
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//Calculate Price
	var selGame = $('#select-game');
	selGame.on('change', function () {
		var gameIndex = selGame.val();
		console.log(gameIndex);
		var result = $('#result')
		if (gameIndex == 1) {
				result.text('4900');
		}
		if (gameIndex == 2) {
				result.text('2900');
		}
	});

	//Show More description
	$('.more-button').on('click', function() {
		$(this).parent().prev('.more-description').slideToggle();
	});

	//OwlCarousel
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			nav:true,
			items:1,
			loop: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});
	});

	//Countdown
	// Set the date we're counting down to
	var countDownDate = new Date("May 17, 2017 20:00:00").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {
		// Get todays date and time
		var now = new Date().getTime();
		// Find the distance between now an the count down date
		var distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// Display the result in the element with id="demo"
		document.getElementById("countdown").innerHTML = days + " д. " + hours + " ч. "
		+ minutes + " м. " + seconds + " с. ";
		// If the count down is finished, write some text
		// if (distance < 0) {
		// 	clearInterval(x);
		// 	document.getElementById("countdown").innerHTML = "EXPIRED";
		// 	}
		}, 1000);

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
