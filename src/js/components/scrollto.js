function scrollToElement(target){
	var _this = $(target);
	_this.on("click", function(e){
		e.preventDefault();
		var a = $(this).attr("href");
		var b = $(a).offset().top;
		$("html, body").animate({
			scrollTop: b-100
		}, 500);
	});

};
function scrollToElementMobile(target){
	var _this = $(target);
	_this.on("click", function(e){
		e.preventDefault();
		var a = $(this).attr("href");
		var b = $(a).offset().top;
		$("html, body").animate({
			scrollTop: b
		}, 500);
	});

};
scrollToElement(".stock-fixed-js");
if(windowWidth < 768){
	scrollToElementMobile(".nav__links");
}else{
	scrollToElement(".nav__links");
};

