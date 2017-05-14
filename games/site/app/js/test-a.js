$(function() {


	//MagnificPopup
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		alignTop: false,
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
	$('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: false,
		preloader: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});




	$('#start-quiz').on('click', function () {
		$('#quiz-intro').slideUp('slow', function() {
			$('#quiz-container').slideDown('slow');
		});
	});
	// $('#start-quiz').on('click', function () {
	// 	$('#quiz-intro').slideUp();
	// 	$('#quiz-container').slideDown();
	// });
	//OwlCarousel
	$('#test-carousel').owlCarousel({
		nav:true,
		items:1,
		loop: false,
		touchDrag: false,
		mouseDrag: false,
		autoHeight: true,
		navText: ['<span><i class="fa fa-arrow-left" aria-hidden="true"></i> Предыдущий</span>', '<span>Следующий <i class="fa fa-arrow-right" aria-hidden="true"></i></span>']
	});

	//Test-progress
	var $testProgress = $('#test-progress');
	$('.owl-next').click(function() {
		if ($testProgress.text() < 9) {
			number = $testProgress.text();
			number++;
			$testProgress.text(number);
		}
	});
	$('.owl-prev').click(function() {
		if ($testProgress.text() > 1) {
			number = $testProgress.text();
			number--;
			$testProgress.text(number);
		}
	});





});
