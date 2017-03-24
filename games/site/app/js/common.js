$(function() {

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

	$('.more-button').on('click', function() {
		$(this).parent().prev('.more-description').slideToggle();
	});

	slideout.disableTouch();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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

	$(document).ready(function(){
  	$('.owl-carousel').owlCarousel({
			nav:true,
			items:1,
			loop: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});
	});


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
