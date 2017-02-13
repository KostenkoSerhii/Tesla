// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/scrollto.min.js
//=include lib/jquery-ui.min.js


sayHello();
$(document).ready(function(){
	/*fixed-line*/
	var	firstScreenHeight = $(".first-screen-js").height();
	//alert(firstScreenHeight);
	var $fixedLine = $(".fixed-line");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > firstScreenHeight && $fixedLine.hasClass("in-not-fixed") ){
			$fixedLine.removeClass("in-not-fixed").addClass("fixed-line-fixed");
		} else if($(this).scrollTop() <= firstScreenHeight && $fixedLine.hasClass("fixed-line-fixed")) {
			$fixedLine.removeClass("fixed-line-fixed").addClass("in-not-fixed");
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
		}else{
			/*tabs*/
			$("#adv-tabs").tabs({
				event: "mouseover"
			});
			/*tabs*/

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

	});