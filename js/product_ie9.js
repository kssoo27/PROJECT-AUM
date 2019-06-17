$(function(){
// .link 글씨 색 변화
	var fontColor="";
	$(".link").append("<span class='background'></span>");
	$(".link").hover(
		function(){
			$(this).find(".link_text").stop().animate({opacity:0},500);
			$(this).find(".background").stop().animate({right:"-10%"},500);
		},
		function(){
			$(this).find(".link_text").stop().animate({opacity:1},500);
			$(this).find(".background").stop().animate({right:"90%"},500);
		}
	);
});