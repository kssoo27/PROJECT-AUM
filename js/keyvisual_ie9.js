window.addEventListener("load", function(){
/* keyvisual */
	var mainIndex=0;
	var mainBanner=document.querySelectorAll(".mainBanner li");
	var controlBtnList=document.querySelectorAll(".controlBtn li");
	
	mainBanner[0].style.display="block";
	controlBtnList[0].className="on";
	
// 자동 배너 변화
	var bannerChange=function(){	
		for(var i=mainIndex; i<mainBanner.length; i++){
			mainBanner[i].style.display="none";
			controlBtnList[i].className="";
		}
		if(mainIndex<i-1){
			mainIndex++;
		}
		else{
			mainIndex=0;
		}
		mainBanner[mainIndex].style.display="block";
		controlBtnList[mainIndex].className="on";
	}
// 자동 배너 실행
	var intervalBanner=setInterval(bannerChange, 5000);
	
// 자동 배너 재생 및 일시정지
	var playBtn=document.querySelector(".playBtn");
	playBtn.addEventListener("click", function(e){
		e.preventDefault();
		if(this.className=="playBtn play"){
			clearInterval(intervalBanner);
			this.className="playBtn pause";
		}
		else if(this.className=="playBtn pause"){
			intervalBanner=setInterval(bannerChange, 5000);
			this.className="playBtn play";
		}
	});
/* keyvisual control button */
// 순서 버튼
	for(var i=0; i<controlBtnList.length; i++){
		controlBtnList[i].index=i;
		
		controlBtnList[i].addEventListener("click", function(e){
			e.preventDefault();
			
			for(var j=0; j<controlBtnList.length; j++){
				controlBtnList[j].className="";
				mainBanner[j].style.display="none";
			}
			this.className="on";
			mainBanner[this.index].style.display="block";
			mainIndex=this.index;
			if(playBtn.className=="playBtn play"){
				clearInterval(intervalBanner);
				intervalBanner=setInterval(bannerChange, 5000);
			}
		});
	}
});