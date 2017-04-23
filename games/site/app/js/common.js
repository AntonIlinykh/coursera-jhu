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


	//Calculate Price and make payment buttons
	//document.getElementById("select-game").selectedIndex = -1;
	var selGame = $('#select-game');
	selGame.on('change', function () {
		var selectSecondGame = $('#select-second-game');
		var paymentButton = $("#payment-button");
		var result = $('#result');
		var gameIndex = selGame.val();
		var selectSecondGameContainer = $('#select-second-game-container');
		if (gameIndex == 1) {
			selectSecondGame.html('<option value="1">Телесная Архетопия + Карта Тамболии 25.05</option>  <option value="2">Телесная Архетопия + Империя Магов 25.05</option> <option value="1">Телесная Архетопия + Карта Тамболии 26.05</option> <option value="1">Телесная Архетопия + Империя Магов 26.05</option>');
			$('#select-third-game').remove();
			selectSecondGameContainer.slideDown();
			result.html('<span class="discount">-30%</span><span class="prices"><span class="old-price">6900 <i class="fa fa-rub" aria-hidden="true"></i></span><span class="new-price">4850 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82+%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9&default-sum=4850&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 2) {
			selectSecondGame.html('<option value="1">Денежный поток + Карта Тамболии 25.05</option>  <option value="2">Денежный поток + Империя Магов 25.05</option> <option value="1">Денежный поток + Карта Тамболии 26.05</option> <option value="1">Денежный поток + Империя Магов 26.05</option>');
			$('#select-third-game').remove();
			selectSecondGameContainer.slideDown();
			result.html('<span class="discount">-30%</span><span class="prices"><span class="old-price">6900 <i class="fa fa-rub" aria-hidden="true"></i></span><span class="new-price">4850 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82+%D0%A3%D1%81%D0%BF%D0%B5%D1%88%D0%BD%D1%8B%D0%B9&default-sum=4850&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 3) {
			selectSecondGame.html('<option value="1">Карта Тамболии 25.05</option>  <option value="2">Карта Тамболии 26.05</option>');
			selectSecondGame.after('<select id="select-third-game" name="third-game"><option value="1">Империя Магов 25.05</option> <option value="2">Империя Магов 26.05</option> </select>');
			selectSecondGameContainer.slideDown();
			result.html('<span class="discount">-25%</span><span class="prices"><span class="old-price">3900 <i class="fa fa-rub" aria-hidden="true"></i></span><span class="new-price">2950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82+%D0%94%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9&default-sum=2950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 4) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">4950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%A2%D0%B5%D0%BB%D0%B5%D1%81%D0%BD%D0%B0%D1%8F+%D0%90%D1%80%D1%85%D0%B5%D1%82%D0%BE%D0%BF%D0%B8%D1%8F&default-sum=4950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 5) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">4950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%94%D0%B5%D0%BD%D0%B5%D0%B6%D0%BD%D1%8B%D0%B9+%D0%9F%D0%BE%D1%82%D0%BE%D0%BA&default-sum=4950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 6) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">1950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%9A%D0%B0%D1%80%D1%82%D0%B0+%D0%A2%D0%B0%D0%BC%D0%B1%D0%BE%D0%BB%D0%B8%D0%B8&default-sum=1950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 7) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">1950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D1%8F+%D0%9C%D0%B0%D0%B3%D0%BE%D0%B2&default-sum=1950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 8) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">1950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%9A%D0%B0%D1%80%D1%82%D0%B0+%D0%A2%D0%B0%D0%BC%D0%B1%D0%BE%D0%BB%D0%B8%D0%B8&default-sum=1950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 9) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">1950 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D1%8F+%D0%9C%D0%B0%D0%B3%D0%BE%D0%B2&default-sum=1950&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		} else if (gameIndex == 10) {
			selectSecondGameContainer.slideUp();
			result.html('<span class="prices"><span class="new-price">500 <i class="fa fa-rub" aria-hidden="true"></i></span></span>');
			paymentButton.html('<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/button-widget?account=410015127024277&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=orange&targets=%D0%94%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F+%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D1%8F+%D0%9C%D0%B0%D0%B3%D0%BE%D0%B2&default-sum=500&fio=on&successURL=https%3A%2F%2Fwww.sergeyivanov.info%2Fsuccess.html" width="190" height="48"></iframe>');
		}
	});


	//Show More description
	$('.more-button').on('click', function() {
		$(this).parent().prev('.more-description').slideToggle();
	});

	//OwlCarousel
	$('#feedbacks-carousel').owlCarousel({
		nav:true,
		items:1,
		loop: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	$('#event-pic-carousel').owlCarousel({
		margin: 10,
		lazyload: true,
		items:1,
		loop: false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoWidth: true,
		autoplay:true,
		autoplayTimeout:3500,
		autoplayHoverPause:true
	});

	//Countdown
	// Set the date we're counting down to
	var countDownDate = new Date("May 10, 2017 20:00:00").getTime();
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
	$("#application").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.slideUp();
			$("#payment-area").slideDown();
		});
		return false;
	});
	// $("#application").submit(function() { //Change
	// 	var th = $(this);
	// 	th.slideUp();
	// 	$("#payment-area").slideDown();
	// 	return false;
	// });

	//Photoswipe
	var $pswp = $('.pswp')[0];
	$('.thumbnails-container').each( function() {
		var $pic     = $(this),
				getItems = function() {
						var items = [];
						$pic.find('a').each(function() {
								var $href   = $(this).attr('href'),
										$size   = $(this).data('size').split('x'),
										$width  = $size[0],
										$height = $size[1];

								var item = {
										src : $href,
										w   : $width,
										h   : $height
								}

								items.push(item);
						});
						return items;
				}

		var items = getItems();
		$pic.on('click', '.owl-item', function(event) {
		    event.preventDefault();

		    var $index = $(this).index();
		    var options = {
		        index: $index,
		        bgOpacity: 0.7,
		        showHideOpacity: true
		    }

		    // Initialize PhotoSwipe
		    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
		    lightBox.init();
		});
	});

});
