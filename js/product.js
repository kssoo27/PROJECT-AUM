$(function(){
// .link 글씨 색 변화
	$(".link").hover(
		function(){
			$(this).addClass("enter");
		},
		function(){
			$(this).removeClass("enter");
		}
	);
});