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
			show: { effect: "blind", duration: 300 },
			hide: { effect: "blind", duration: 300 }
			});

 $('.tabs-slider').slick({

  slidesToShow: 3,
  slidesToScroll: 1
  });
		// 
	});