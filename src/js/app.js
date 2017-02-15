// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery-ui.min.js
//=include lib/jquery.magnific-popup.min.js


sayHello();
$(document).ready(function(){
//=include components/scrollto.js
$("body").addClass("loaded");

/*fixed-line*/
var	firstScreenHeight = $(".first-screen-js").height();
	//alert(firstScreenHeight);
	var $fixedLine = $(".fixed-line");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > firstScreenHeight && $fixedLine.hasClass("is-not-fixed") ){
			$fixedLine.removeClass("is-not-fixed").addClass("is-line-fixed");
		} else if($(this).scrollTop() <= firstScreenHeight && $fixedLine.hasClass("is-line-fixed")) {
			$fixedLine.removeClass("is-line-fixed").addClass("is-not-fixed");
		}
	});
	/*fixed-line*/

	/*switch*/
	$(".switch__month").on("click", function(e){
		e.preventDefault();
		$("body").removeClass("is-day-js").addClass("is-night-js");
	});	
	$(".switch__sun").on("click", function(e){
		e.preventDefault();
		$("body").removeClass("is-night-js").addClass("is-day-js");
	});
		// switcher day/night for time
		var time = new Date().getHours();
		if (time >= 6 && time < 21){
			$('body').addClass('is-day-js');
		} else {
			$('body').addClass('is-night-js');
		}
		/*switch*/

		/*menu*/
		$(".first-screen .nav").addClass("first-screen__nav");
		$(".first-screen .nav .nav__links").addClass("first-screen__nav-links");
		$(".fixed-line .nav").addClass("fixed-line__nav");
		$(".fixed-line .nav .nav__links").addClass("fixed-line__nav-links");
		/*menu*/

		/*menu-btn*/
		$(".menu-btn").on("click", function(){
			$(this).toggleClass("btn-is-active");
			$(".first-screen__nav").slideToggle();
		});
		/*menu-btn*/

		/*window width*/
		var windowWidth = $(window).width();

		if(windowWidth < 992){
			/*tabs*/
			$("#adv-tabs").tabs({
			});
			/*tabs*/
		}else if(windowWidth < 768){


		}else{
			/*tabs*/
			$("#adv-tabs").tabs({
				event: "mouseover"
			});
			/*tabs*/

			/*		$('.gall-slider-js').on('afterChange', function(event, slick, currentSlide){
			var curSlide = currentSlide;
			console.log(curSlide);
		});*/

		$(".gallery .slider__img-block").on("click", function(){
			$("body").addClass('is-hidden-js');
			$(".gall-popup-wrapper-js").addClass("popup-wrapper-is-open");
			$(".gall-popup-slider-js").slick({
				infinite: true,
				slide: '.popup-slider__item',
				slidesToShow: 1,
				//initialSlide: curSlide
			//asNavFor: '.gall-slider-js'
		});
		});

		$(".gall-popup-wrapper-js .popup-close").on("click", function(){
			$("body").removeClass('is-hidden-js');
			$(".gall-popup-wrapper-js").removeClass("popup-wrapper-is-open");
		});

		//$(".construction .slider__img-block").on("click", function(){
		//	$("body").addClass('is-hidden-js');
		//	$(".construction-popup-slider-js").addClass("popup-wrapper-is-open");
		//	$(".construction-popup-slider-js").slick({
		//		infinite: true,
		//		slide: '.popup-slider__item',
		//		slidesToShow: 1,
		//		//initialSlide: curSlide
		//	//asNavFor: '.gall-slider-js'
		//});
		//});
		//$(".construction-popup-wrapper-js .popup-close").on("click", function(){
		//	$("body").removeClass('is-hidden-js');
		//	$(".construction-popup-wrapper-js").removeClass("popup-wrapper-is-open");
		//});

		/*galleries popup*/
	};
	/*window width*/
	$("#planntabs1").tabs({
			//show: { effect: "fadeIn", duration: 300 },
			//hide: { effect: "fadeOut", duration: 300 },
			activate: function(event, ui) {
				addSlider(ui.newPanel, '.tabs-slider-js', {
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1
						}
					}
					]
				});
			},
			create: function(event, ui) {
				addSlider(ui.panel, '.tabs-slider-js', {
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1
						}
					}
					]

				});
			}
		});

	function addSlider(container, slider, option) {
		container.find(slider).each(function() {
			var _this = $(this);
			if (_this.hasClass('slick-initialized')) return;
			_this.slick(option);
		});
	};


	$(".planning .slide-js").on('click', function(e){
		e.preventDefault();
		$("body").addClass('is-hidden-js');
		$(".planning-popup").addClass("planning-popup-is-open");
		$("#planntabs2").tabs({
			activate: function(event, ui) {
				addSlider(ui.newPanel, '.slider-popup-js', {
				});
			},
			create: function(event, ui) {
				addSlider(ui.panel, '.slider-popup-js', {
				});
			}
		});
	});
	$(".planning-popup .popup-close-js").on("click", function(){
		$(".planning-popup").removeClass("planning-popup-is-open");
		$("body").removeClass('is-hidden-js');
	});
	/*galleries popup*/
	$(".gall-slider-js").slick({
		infinite: true,
		centerMode: true,
		slide: '.slider__item',
		slidesToShow: 1,
		centerPadding: '120px',
		variableWidth: true,
			//asNavFor: '.gall-popup-slider-js',
			arrows: true,
			responsive: [
			{
				breakpoint: 1100,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					centerPadding: '0',
					variableWidth: false
				}
			}
			]
		});
	$(".stock-slider-js").slick({
		infinite: true,
		slide: '.stock-slider__item',
		slidesToShow: 2,
		arrows: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});
	$("#date-tabs").tabs({
			//show: { effect: "fadeIn", duration: 300 },
			//hide: { effect: "fadeOut", duration: 300 },
			activate: function(event, ui) {
				addSlider(ui.newPanel, '.construction-slider-js', {
					infinite: true,
					centerMode: true,
					slide: '.slider__item',
					slidesToShow: 1,
					centerPadding: '120px',
					variableWidth: true,
					arrows: true,
					responsive: [
					{
						breakpoint: 1100,
						settings: {
							centerMode: false,
							slidesToShow: 1,
							centerPadding: '0',
							variableWidth: false
						}
					}
					]
				});
			},
			create: function(event, ui) {
				addSlider(ui.panel, '.construction-slider-js', {
					infinite: true,
					centerMode: true,
					slide: '.slider__item',
					slidesToShow: 1,
					centerPadding: '120px',
					variableWidth: true,
					arrows: true,
					responsive: [
					{
						breakpoint: 1100,
						settings: {
							centerMode: false,
							slidesToShow: 1,
							centerPadding: '0',
							variableWidth: false
						}
					}
					]

				});
			}
		});
	setTimeOut(function(){
		$("body").addClass("loaded");
	}, 0);
	
});