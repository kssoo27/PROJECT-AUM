$(function(){
	$(".insta_pic li").hover(
		function(){
			$(this).children("a").stop().animate({left:"-10%",top:"-10%",width:"120%",height:"120%"},300)
		},
		function(){
			$(this).children("a").stop().animate({left:"0%",top:"0%",width:"100%",height:"100%"},300)
		}
	);
});