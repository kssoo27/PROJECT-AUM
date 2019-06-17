$(function(){
// 인스타 사진 크기 증가
	$(".insta_pic img").hover(
		function(){
			$(this).addClass("on")
		},
		function(){
			$(this).removeClass("on")
		}
	);
});