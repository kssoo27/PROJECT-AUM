$(function(){
/* GNB */
// menu tab click
	$(".menu_btn").click(function(e){
		e.preventDefault();
	// 화면 고정
		$("body").addClass("fixed");		
		$(".full_menu_container").animate({"margin-left":"0"},300);
		$(".full_menu_wrap").animate({"margin-left":"0"},300);	
		if($(".full_menu_overlay").hasClass("active")){
			$(".full_menu_overlay").show();		
		}
	});
// overlay click , reset
	$(".full_menu_overlay, .close").click(function(e){
		e.preventDefault();
		$("body").removeClass("fixed");	
		$(".full_menu_container").animate({"margin-left":"-100%"},300);
		$(".full_menu_wrap").animate({"margin-left":"100%"},300);
		$(".full_menu_overlay").hide();
	});

// menu active
	$(".menu li a").each(function(){
		$(this).append("<span class='underline'></span>");
	});
	$(".menu li a").hover(
		function(){
			$(this).find(".underline").stop().animate({left:"0%",width:"100%"},300);
		},
		function(){
			$(this).find(".underline").stop().animate({left:"50%",width:"0%"},300);
		}
	);
// full_menu li active
	var nuderLinePos='';
	$(".full_menu li li a").each(function(){
		$(this).append("<span class='underline'></span>");
	});
	$(".full_menu li li a").hover(
		function(){
			$(this).find(".underline").stop().animate({width:"100%"},500);
		},
		function(){
			$(this).find(".underline").stop().animate({width:"0"},500);
		}
	);
});