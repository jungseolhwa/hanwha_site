/*common.js*/
$(document).ready(function(){
    //브라우저 처음 로딩했을 때, 해당하는 main.html 문서를 통째로 가져온다.
    $.ajax({
        url : "./main.html",
        success : function(result){
            console.log(result);
            $("main").html(result);    
        }
    });

    //"로고 이미지" 클릭시
    $("header .logo a").click(function(){
        $.ajax({
            url : "./main.html",
            success : function(result){
                console.log(result);
                $("main").html(result);    
            }
        });
    
        return false;
    });


    //sub1이라는 메뉴 클릭시
    $("header .menu ul li:nth-child(1)").click(function(){
        $.ajax({
            url : "./sub1.html",
            success : function(result){
                console.log(result);
                $("main").html(result);    
            }
        });
        return false;
    });
})
