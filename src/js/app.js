// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery-ui.min.js
//=include lib/jquery.magnific-popup.min.js


sayHello();
$(document).ready(function(){
	var windowWidth = $(window).width();
//=include components/scrollto.js
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
	var tampDayBg = $(".first-screen-js").attr("data-day-background");
	var tampNightBg = $(".first-screen-js").attr("data-night-background");
	//console.log(tampDayBg);
	//console.log(tampNightBg);
	$(".switch__month").on("click", function(e){
		e.preventDefault();
		$("body").removeClass("is-day-js").addClass("is-night-js");
		$(".first-screen-js").css("backgroundImage", "url("+tampNightBg+")");
	});	
	$(".switch__sun").on("click", function(e){
		e.preventDefault();
		$("body").removeClass("is-night-js").addClass("is-day-js");
		$(".first-screen-js").css("backgroundImage", "url("+tampDayBg+")");
	});
		// switcher day/night for time
		var time = new Date().getHours();
		if (time >= 6 && time < 21){
			$('body').addClass('is-day-js');
			$(".first-screen-js").css("backgroundImage", "url("+tampDayBg+")");
		} else {
			$('body').addClass('is-night-js');
			$(".first-screen-js").css("backgroundImage", "url("+tampNightBg+")");
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
		/*tabs*/
		if(windowWidth < 992){
			/*tabs*/
			$("#adv-tabs").tabs({

			});
			/*tabs*/
		}else if(windowWidth < 768){
		}else{

			$("#adv-tabs").tabs({
				event: "mouseover"
			});
			/*tabs*/

			/*		$('.gall-slider-js').on('afterChange', function(event, slick, currentSlide){
			var curSlide = currentSlide;
			console.log(curSlide);
		});*/

		$(".slider__img-block").on("click", function(){
			$("body").addClass('is-hidden-js');
			$(".gall-popup-wrapper-js").addClass("popup-wrapper-is-open");
			if ($(".gall-popup-slider-js").hasClass('slick-initialized')){
			}else{
				$(".gall-popup-slider-js").slick({
					infinite: true,
					slide: '.popup-slider__item',
					slidesToShow: 1,
				//initialSlide: curSlide
			//asNavFor: '.gall-slider-js'
		});
			};

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
	if(windowWidth < 768){
		$(".first-screen__nav-links").on("click", function(e){
			e.preventDefault();
			$(".menu-btn").trigger("click");
			if($(".planning-popup").hasClass("planning-popup-is-open")){
				$(".planning-popup .popup-close-js").trigger("click");

			};
		});
	};
	/*window width*/


	/*planning block*/
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
		var popupHrefTab = $(this).parents('#planntabs1').tabs( "option", "active" );
		var popupHrefSlide = $(this).attr("data-slick-index");
		//console.log(popupHrefSlide);

		$("body").addClass('is-hidden-js');
		$(".planning-popup").addClass("planning-popup-is-open");


		$("#planntabs2").tabs({
			active: popupHrefTab,
			activate: function(event, ui) {
				 addSlider(ui.newPanel, '.slider-popup-js', {
				// 	// initialSlide: popupHrefSlide

				 });
			},
			create: function(event, ui) {
				addSlider(ui.panel, '.slider-popup-js', {
					initialSlide: popupHrefSlide
				});
			}
			
		});

		if ($("#planntabs2").hasClass('ui-tabs')) {
			var index = $( "#planntabs2" ).tabs( "option", "active");
			var slider = $("#planntabs2").find('.tabs-content-popup').eq(index).find('.slider-popup-js');
			slider.slick('slickGoTo', popupHrefSlide);
			return;
		}

			//var activePopupTab = $( "#planntabs2" ).tabs( "option", "active")
			//	$(activePopupTab).find(".slider-popup-js").slick('slickGoTo', popupHrefSlide)

		//$('#planntabs2').tabs("option", "active", popupHrefTab );
		// var openTabInPopup = $('#planntabs2').tabs( "option", "active" );
				//$(openTabInPopup).find(".slider-popup-js").slick('slickGoTo', popupHrefSlide)
		//console.log(openTabInPopup);
					//$('.slider-popup-js').slickGoTo(3);
				});

	$(".planning-popup .popup-close-js").on("click", function(){
		$(".planning-popup").removeClass("planning-popup-is-open");
		$("body").removeClass('is-hidden-js');
	});

	$(".fixed-line .nav__links").on("click", function(){
		if($(".planning-popup").hasClass("planning-popup-is-open")){
			$(".planning-popup").removeClass("planning-popup-is-open");
			$("body").removeClass('is-hidden-js');
		};

	});
	/*planning block*/

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



});
$(window).on("load", function (){
	
	$(".spinner").fadeOut(300);
	$(".preload-block__left").css("transform", "translateX(-100%)");
	$(".preload-block__right").css("transform", "translateX(100%)");
	
	setTimeout(function(){
		$(".preload-block").css("display", "none");
	}, 500);
});