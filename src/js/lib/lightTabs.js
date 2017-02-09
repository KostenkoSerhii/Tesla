
	/*LightTabs*/
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			showPage = function(tabs, i){
				$(tabs).children(".tabs__container-js").children(".tabs__content-js").css({"overflow" : "hidden" , "height" : "0"});
				$(tabs).children(".tabs__container-js").children(".tabs__content-js").eq(i).css("height", "auto");
				$(tabs).children(".tabs__nav-item-js ").removeClass("is-active");
				$(tabs).children(".tabs__nav-item-js ").eq(i).addClass("is-active");
			}
			
			showPage(tabs, 0);
			
			$(tabs).children(".tabs__nav-item-js").each(function(index, element){
				$(element).attr("data-page", i);
				i++;
			});
			
			$(tabs).children(".tabs__nav-item-js").click(function(){
				showPage($(this).parent().parent(), parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};
/*LightTabs*/