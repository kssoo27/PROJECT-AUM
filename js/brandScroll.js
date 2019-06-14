$(function(){
	var scrollTimer;	// scroll Timeout
	/* scroll Event */
	$(window).scroll(function(){
		clearTimeout(scrollTimer);
		scrollTimer=setTimeout(function(){
			
	// Brand translateY 효과--------------------------------------------------------
			windowTop=$(window).scrollTop();
			if(windowTop >= $("#brand").offset().top-500){
				$("#brand li").addClass("on");
			}
	// header fixed------------------------------------------------------------
			if(windowTop >= $("#keyvisual").offset().top){
				$("#header").addClass("fix");
				$(".util").animate({top:"5px"},300);
			}
			else{
				$("#header").removeClass("fix");
				$(".util").animate({top:"0"},300);
			}
		},50);
	}).trigger("scroll");
});