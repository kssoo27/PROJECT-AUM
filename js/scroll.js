$(function(){
	var scrollTimer	// scroll Timeout
	/* scroll Event */
	$(window).scroll(function(){
		clearTimeout(scrollTimer);
		scrollTimer=setTimeout(function(){	
			windowTop=$(window).scrollTop();
	// Brand translateY 효과
			if(windowTop>=$("#brand").offset().top-400){
				$("#brand .cont dl").addClass("on");
			}
	// header fixed
			if(windowTop>=$("#keyvisual").offset().top){
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