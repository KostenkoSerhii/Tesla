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
	//$(".header__menu").slideToggle();
});
	/*menu-btn*/

	/*advantages tabs*/
	$( "#tabs" ).tabs({
		event: "mouseover"
	});
	/*advantages tabs*/


		// 
	});