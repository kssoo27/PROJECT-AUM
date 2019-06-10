window.addEventListener("load", function(){
	var windowHeight;	// 윈도우 높이
	var windowWidth;	// 윈도우 넓이
	var h;
	var timer;	// scroll Timeout
	var productIndex=0;	// product 이미지 인덱스
	var cont1Index=0;	// product cont1 이미지 인덱스
	var cont2Index=0;	// product cont2 이미지 인덱스
	var total;		// 이미지 개수
	
	$(window).scroll(function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			
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
	
	$(window).resize(function(){
		windowHeight=$(window).height();
		windowWidth=$(window).width();

	// 화면크게에 따른 이미지 변환
	// 메인 배너
		if(windowWidth <= 800){
			$(".mainBanner li").eq(0).find("img").attr({src:"images/main_bg1_small.jpg"});
			$(".mainBanner li").eq(1).find("img").attr({src:"images/main_bg2_small.gif"});
			$(".mainBanner li").eq(2).find("img").attr({src:"images/main_bg3_small.jpg"});
		}
		else {
			$(".mainBanner li").eq(0).find("img").attr({src:"images/main_bg1.jpg"});
			$(".mainBanner li").eq(1).find("img").attr({src:"images/main_bg2.gif"});
			$(".mainBanner li").eq(2).find("img").attr({src:"images/main_bg3.jpg"});
		}
	// section 1  브랜드 
		if(windowWidth <= 400){
			$(".philosophy img").attr({src:"images/brand_philosophy_small.jpg"});
		}
		else if(windowWidth <=820){
			$(".philosophy img").attr({src:"images/brand_philosophy_medium.jpg"});
		}
		else {
			$(".philosophy img").attr({src:"images/brand_philosophy.jpg"});
		}
		if(windowWidth <= 400){
			$(".green_collar img").attr({src:"images/brand_greenCollar_small.jpg"});
		}
		else {
			$(".green_collar img").attr({src:"images/brand_greenCollar.jpg"});
		}
		
	/* SNS 이미지 */
		if(windowWidth <= 400){
			instaImgLength=$(".insta_pic li").length;
			$(".insta_pic ul").css({width:((instaImgLength+2)*50)+"%"});
			instaImgWidth=$(".insta_pic li").width((100/(instaImgLength+2))+"%");
		}
		else{
			$(".insta_pic ul").css({width:"100%"});
			instaImgWidth=$(".insta_pic li").width("18%");
		}
	}).trigger("resize");
			
	/* gnb , menu -------------------------------------------------------------------- */
	// menu active
	$(".menu li a").hover(
		function(){
			$(this).parent().addClass("active");
		},
		function(){
			$(this).parent().removeClass("active");
		}
	);
	// menu tab click
	$(".menu_btn").click(function(e){
		e.preventDefault();
		
		// 화면 고정
		$("body").addClass("fixed");
		
/*		ie 9	
		$(".full_menu_container").animate({"margin-left":"0"},500);
		$(".full_menu_wrap").animate({"margin-left":"0"},500);
*/			
		$(".full_menu_container").addClass("on");
		if(windowWidth<=1100 && windowWidth >=400){
			$(".full_menu_overlay").show();		
		}
	});
	// overlay click , reset
	$(".full_menu_overlay, .close").click(function(e){
		e.preventDefault();

		$(".full_menu_container").removeClass("on");
		$("body").removeClass("fixed");
		
/*		ie 9
		$(".full_menu_container").animate({"margin-left":"-100%"},500);
		$(".full_menu_wrap").animate({"margin-left":"100%"},500);
*/
		$(".full_menu_overlay").hide();
	});
	
	// full_menu li active
	$(".full_menu li li a").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	
	/* intro_banner */
	// 기본 설정
	$(".intro_banner").eq(0).show();
	$(".banner_btn a").eq(0).addClass("on");
	
	// 배너 버튼 클릭시
	var flag=true; // 실행 플래그
	$(".banner_btn a").click(function(e){
		e.preventDefault();
		if(flag==false){
			return false;
		}
		flag=false; // 실행 플래그 잠금
		var n=$(this).index();
		
		$.getJSON("data/banner.json", function(banner){
			$.each(banner, function(k, v){
				if(k==n){
					$(".intro > li").eq(n).fadeIn(500,function(){
						$(".intro").css({"background":'url("'+v+'") no-repeat center center'});
						flag=true; // 실행 플래그 열림.
					});
				}
			});
		});
		
		$(".intro > li").eq(n).siblings("li").hide();
		$(".banner_btn a").eq(n).siblings().removeClass("on");
		$(".banner_btn a").eq(n).addClass("on");
	});

	/* 배너 a 노드 효과 */	
	// 기본 설정 ( opacity: 0.5 )
	$(".intro_banner a").css({opacity:"0.5"});
	$(".intro_banner a").hover(
		function(){
			$(this).stop().animate({opacity:1},300)
		},
		function(){
			$(this).stop().animate({opacity:0.5},300)
		}
	)
	
	/* keyvisual */
	var mainIndex=0;
	var mainBanner=document.querySelectorAll(".mainBanner li");
	var controlBtnList=document.querySelectorAll(".controlBtn li");
	
	mainBanner[0].style.display="block";
	controlBtnList[0].classList.add("on");
	
	// 자동 배너 변화
	var bannerChange=function(){	
		for(var i=mainIndex; i<mainBanner.length; i++){
			mainBanner[i].style.display="none";
			controlBtnList[i].classList.remove("on");
		}
		if(mainIndex<i-1){
			mainIndex++;
		}
		else{
			mainIndex=0;
		}
		mainBanner[mainIndex].style.display="block";
		controlBtnList[mainIndex].classList.add("on");
	}
	// 자동 배너 실행
	var intervalBanner=setInterval(bannerChange, 5000);
	
	// 자동 배너 재생 및 일시정지
	var playBtn=document.querySelector(".playBtn");
	playBtn.addEventListener("click", function(e){
		e.preventDefault();
		if(this.classList.contains("play")==true){
			clearInterval(intervalBanner);
			this.classList.remove("play");
			this.classList.add("pause");
		}
		else if(this.classList.contains("pause")==true){
			intervalBanner=setInterval(bannerChange, 5000);
			this.classList.remove("pause");
			this.classList.add("play");
		}
	});
	/* keyvisual control button */
	// 순서 버튼
	for(var i=0; i<controlBtnList.length; i++){
		controlBtnList[i].index=i;
		
		controlBtnList[i].addEventListener("click", function(e){
			e.preventDefault();
			
			for(var j=0; j<controlBtnList.length; j++){
				controlBtnList[j].classList.remove("on");
				mainBanner[j].style.display="none";
			}
			this.classList.add("on");
			mainBanner[this.index].style.display="block";
			mainIndex=this.index;
			if(playBtn.classList.contains("play")==true){
				clearInterval(intervalBanner);
				intervalBanner=setInterval(bannerChange, 5000);
			}
		});
	}
	
/* product ------------------------------------------------------------------------- */
// 기본 값
	$(".cont1 .sub_image li").eq(0).addClass("on");
	$(".cont2 .sub_image li").eq(0).addClass("on");
	$(".cont1 .main_image li").eq(0).show();
	$(".cont2 .main_image li").eq(0).show();

// 이미지 클릭
	$(".sub_image li a").click(function(e){
		e.preventDefault();
		
		$(this).parent().siblings().removeClass("on");
		$(this).parent().addClass("on");
		
		// turn == cont 의 index()
		turn=$(this).parents(".cont").index();
		
		if(turn==1){ // cont1
			cont1Index=$(this).parent().index();
			productIndex=cont1Index;
		} 
		else if(turn==2){ // cont2
			cont2Index=$(this).parent().index();
			productIndex=cont2Index;
		}
		
		$(this).parents(".cont_image").find(".main_image li").eq(productIndex).siblings().hide();
		$(this).parents(".cont_image").find(".main_image li").eq(productIndex).show();
	});
	
// 이미지 좌우 버튼
	$(".main_image > a").each(function(){ // 각각의 버튼
		$(this).click(function(e){ // 클릭시
			e.preventDefault();
	// 1) cont 1 , cont2 구분하기
			turn=$(this).parents(".cont").index();
			
			if(turn==1){ // cont1
				if($(this).next("a").attr("class")!= undefined){ // left btn
					if($(this).nextAll("ul").find("li").eq(cont1Index).prev("li").find("img").attr("src") == undefined){ // 마지막 순간
						cont1Index=total-1;
					}
					else{ // 기본 로직
						cont1Index--;
					}
				}
				else{ // right btn
					if($(this).nextAll("ul").find("li").eq(cont1Index).next("li").find("img").attr("src") == undefined){ // 마지막 순간
						cont1Index=0;
					}
					else{ // 기본 로직
						cont1Index++;
					}
				}
				productIndex=cont1Index;
			}
			else if(turn==2){ // cont2
				if($(this).next("a").attr("class")!= undefined){ // left btn
					if($(this).nextAll("ul").find("li").eq(cont2Index).prev("li").find("img").attr("src") == undefined){ // 마지막 순간
						cont2Index=total-1;
					}
					else{ // 기본 로직
						cont2Index--;
					}
				}
				else{ // right btn
					if($(this).nextAll("ul").find("li").eq(cont2Index).next("li").find("img").attr("src") == undefined){ // 마지막 순간
						cont2Index=0;
					}
					else{ // 기본 로직
						cont2Index++;
					}
				}
				productIndex=cont2Index;
			}
		// 서브 이미지 선택
			$(this).parent().next(".sub_image").find("li").eq(productIndex).siblings().removeClass("on")
			$(this).parent().next(".sub_image").find("li").eq(productIndex).addClass("on")	
		// 메인이미지 활성화
			$(this).nextAll("ul").find("li").eq(productIndex).siblings().hide();
			$(this).nextAll("ul").find("li").eq(productIndex).show();
		});
	});
// .link 글씨 색 변화
	$(".link").hover(
		function(){
			$(this).addClass("enter");
		},
		function(){
			$(this).removeClass("enter");
		}
	);
/* 인스타 insta ---------------------------------------------------------------------  */
	var instaIndex=0;
	var instaImgWidth=$(".insta_pic ul li").width();
	var instaFirstCopy=$(".insta_pic ul li").eq(0).html();
	var instaSecondCopy=$(".insta_pic ul li").eq(1).html();
	var instaEndCopy=$(".insta_pic ul li").eq(instaImgLength-1).html();
	var instaEndPrevCopy=$(".insta_pic ul li").eq(instaImgLength-2).html();
// 인스타 사진 크기 증가
	$(".insta_pic img").hover(
		function(){
			$(this).addClass("on")
		},
		function(){
			$(this).removeClass("on")
		}
	);
// 모바일 해상도 좌우 버튼
	$(".rolling_btn a").each(function(){
		$(this).click(function(e){	
			e.preventDefault();
			if($(".insta_pic ul").is(":animated")==true){
				return false;
			}
			if($(this).attr("class")=="prev"){
				instaIndex--;
				if(instaIndex==-1){
					$(".insta_pic ul").prepend("<li class='snsLink'>"+instaEndCopy+"</li>");
					$(".insta_pic ul").prepend("<li>"+instaEndPrevCopy+"</li>");
					$(".insta_pic li").width(instaImgWidth);
					$(".insta_pic ul").css({transform:"translatex(-"+instaImgWidth*2+"px)"});
				}
			}
			else{
				instaIndex++;
				if(instaIndex==5){
					$(".insta_pic ul").append("<li>"+instaFirstCopy+"</li>");
					$(".insta_pic ul").append("<li>"+instaSecondCopy+"</li>");
					$(".insta_pic li").width(instaImgWidth);
				}
			}
			$(".insta_pic ul").animate({left:-instaImgWidth*2*instaIndex},500, function(){
				if(instaIndex==-1){
					instaIndex=4;
					$(".insta_pic ul").css({transform:"translatex(0)"});
					$(".insta_pic ul").css({left:-instaImgWidth*2*instaIndex});
					$(".insta_pic li").first().remove();
					$(".insta_pic li").first().remove();
				}
				else if(instaIndex==5){
					instaIndex=0;
					$(".insta_pic ul").css({left:0});
					$(".insta_pic li").last().remove();
					$(".insta_pic li").last().remove();
				}
			});
		});
	});
});