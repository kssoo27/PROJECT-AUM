window.addEventListener("load", function(){
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
});