$(function(){
/* GNB */
// menu tab click
	$(".menu_btn").click(function(e){
		e.preventDefault();
	// 화면 고정
		$("body").addClass("fixed");
		$(".full_menu_container").addClass("active");
		if($(".full_menu_overlay").hasClass("active")){
			$(".full_menu_overlay").show();		
		}
	});
// overlay click , reset
	$(".full_menu_overlay, .close").click(function(e){
		e.preventDefault();
		$("body").removeClass("fixed");
		$(".full_menu_container").removeClass("active");
		$(".full_menu_overlay").hide();
	});

// menu active
	$(".menu li a").hover(
		function(){
			$(this).parent().addClass("active");
		},
		function(){
			$(this).parent().removeClass("active");
		}
	);
// full_menu li active
	$(".full_menu li li a").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
});