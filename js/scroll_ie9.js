$(function(){
	var scrollTimer	// scroll Timeout
	var brandScrollFlag=true;
	var headerScrollFlag=true;
	/* scroll Event */
	$(window).scroll(function(){
		clearTimeout(scrollTimer);
		scrollTimer=setTimeout(function(){	
			windowTop=$(window).scrollTop();
	// Brand translateY 효과
			if(brandScrollFlag==true){
				if(windowTop>=$("#brand").offset().top-400){
					brandScrollFlag==false;
					$(".cont dl").animate({opacity:1,"margin-top":0},1000);
				}
			}
	// header fixed
			if(windowTop>=$("#keyvisual").offset().top && headerScrollFlag==true){
				headerScrollFlag=false;
				$("#header").animate({padding:"25px",height:"80px"},500);
				$("#header").css({background:"url(../images/headerBackground.png) no-repeat center bottom"});
				$(".util").stop().animate({top:"5px"},300);
			}
			else if (windowTop<$("#keyvisual").offset().top && headerScrollFlag==false){
				headerScrollFlag=true;
				$("#header").animate({padding:"35px",height:"100px"},500);
				$("#header").css({background:"none"});
				$(".util").stop().animate({top:"0"},300);
			}
		},50);
	}).trigger("scroll");
});