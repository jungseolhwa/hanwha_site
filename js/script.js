$(document).ready(function(){
    $(".icon_1").mouseover(function(){
        $(this).attr('src','./img/main_icon01_on.png');
    })
    .mouseout(function(){
        $(this).attr('src','./img/main_icon01_off.png')
    })

    $(".icon_2").mouseover(function(){
        $(this).attr('src','./img/main_icon02_on.png');
    })
    .mouseout(function(){
        $(this).attr('src','./img/main_icon02_off.png')
    })

    $(".icon_3").mouseover(function(){
        $(this).attr('src','./img/main_icon03_on.png');
    })
    .mouseout(function(){
        $(this).attr('src','./img/main_icon03_off.png')
    })


    $(".icon_4").mouseover(function(){
        $(this).attr('src','./img/main_icon04_on.png');
    })
    .mouseout(function(){
        $(this).attr('src','./img/main_icon04_off.png')
    })


/**********footer*************/

});
function sitehead(){
    let click= document.getElementById("s_body");
    if(click.style.display === "none"){
        click.style.display = "block";
    }else{click.style.display = "none";}
}


/*********************드롭메뉴******************** */
/*이것도됨
function dp_menu(){
    let click= document.getElementById("drop_menu");
    if(click.style.display = "block"){
        click.style.display === "none";
    }else{click.style.display = "none";}
}

$("#close").click(function(){
    $("#drop_menu").css("display","none");

});*/

$(".ham").click(function(){
    $("#drop_menu").css("transform","translateY(0%)");

});

$("#close").click(function(){
    $("#drop_menu").css("transform","translateY(-100%)");

});



/****************슬라이드******************/

//다음 버튼 클릭시 다음 이미지로 변경하기

var imgCover = document.querySelector("#slide_contain ul");

var nextBtn = document.querySelector(".left");
nextBtn.addEventListener("click", function(){
    var imgFirst = imgCover.children[0];
    imgCover.append(imgFirst);
});

var prevBtn = document.querySelector(".right");
prevBtn.addEventListener("click", function(){
    var imgLast = imgCover.children[imgCover.children.length - 1];
    //console.log(imgLast);
    //console.log(imgCover.children.length);
    imgCover.prepend(imgLast);
});


//////////자동
/*$(document).ready(function(){

var cnt = 0; // 함수 호출 횟수
	var i=0; // 이미지 인덱스
	var imgNum=4; // 이미지 개수
	var imgSize=1920; // 이미지 크기
		
	function slide() {  //함수이름 slide()	
	  cnt = cnt + 1; // 함수 호출 회수 증가
	  i=(cnt-1)%imgNum; // 이미지는 3개를 돌려 쓸거라서 imgNum으로 나눈 나머지를 i에 저장
	  // cnt-1을 해주는 이유 : cnt>1 일 때부터 리스트 삭제, 추가가 이루어짐(1초 뒤부터 리스트 추가)
	  
	  if(i==0){	i=imgNum;}// 1,2,3,1,2,3 이 반복되어야 함
	  
	  $('#slide_contain ul').css("left","0px"); // 0 -> -imgSize을 반복하기 위해	
   	  $('#slide_contain ul').stop().animate({'left' : -imgSize+"px"}, "slow");	 
	  
	  if(cnt>1){ //cnt>0으로 하면 첫 번째 리스트가 슬라이스되기전에 삭제가 된다.
		$('#slide_contain ul>li:first').remove(); // 제일 첫 <li> 삭제
		$('#slide_contain ul').append(' <li class="slide" id="slide + i +">');
      //마지막에 <li> 추가
	  }//if
	}//함수이름 slide()	
	// 3초에 한번 함수를 실행
	setInterval(function(){ slide();}, 2000);	

});*/


/*******모바일버전메뉴아코디언*모르겟다...******/

$(".main_menu2").click(function() {
    $(this).next(".sub2").stop().slideToggle(500);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".sub2").siblings(".sub2").slideUp(500); // 1개씩 펼치기
 });