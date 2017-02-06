// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/scrollto.min.js
//=include lib/jquery-ui.min.js

sayHello();

	var $menu = $(".wrapper-scroll");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 80 && $menu.hasClass("in-notfixed") ){
			$menu.removeClass("in-notfixed").addClass("wrapper-fixed");
		} else if($(this).scrollTop() <= 80 && $menu.hasClass("wrapper-fixed")) {
			$menu.removeClass("wrapper-fixed").addClass("in-notfixed");
		}
	});