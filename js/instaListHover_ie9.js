$(function(){
	$(".insta_pic li").hover(
		function(){
			$(this).children("a").children("img").stop().animate({left:"-10%",top:"-10%","max-width":"120%"},300)
		},
		function(){
			$(this).children("a").children("img").stop().animate({left:"0%",top:"0%","max-width":"100%"},300)
		}
	);
});