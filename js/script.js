$(document).ready(function () {
    $(".icon_1")
        .mouseover(function () {
            $(this).attr('src', './img/main_icon01_on.png');
        })
        .mouseout(function () {
            $(this).attr('src', './img/main_icon01_off.png')
        })

    $(".icon_2")
        .mouseover(function () {
            $(this).attr('src', './img/main_icon02_on.png');
        })
        .mouseout(function () {
            $(this).attr('src', './img/main_icon02_off.png')
        })

    $(".icon_3")
        .mouseover(function () {
            $(this).attr('src', './img/main_icon03_on.png');
        })
        .mouseout(function () {
            $(this).attr('src', './img/main_icon03_off.png')
        })

    $(".icon_4")
        .mouseover(function () {
            $(this).attr('src', './img/main_icon04_on.png');
        })
        .mouseout(function () {
            $(this).attr('src', './img/main_icon04_off.png')
        })

});

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

$(".ham").click(function () {
    $("#drop_menu").css("transform", "translateY(0%)");

});

$("#close").click(function () {
    $("#drop_menu").css("transform", "translateY(-100%)");

});

/****************슬라이드******************/

$(function () {
    var $slider = $('#slide_contain'),
        $firstSlide = $slider
            .find('.slide')
            .first()
            .stop(true)
            .animate({
                'opacity': 1
            }, 200);

    function PrevSlide() { // 이전버튼 함수
        stopSlide();
        startSlide();
        var $lastSlide = $slider
            .find('.slide')
            .last()
            .prependTo($slider);
        $secondSlide = $slider
            .find('.slide')
            .eq(1)
            .stop(true)
            .animate({
                'opacity': 0
            }, 400);
        $firstSlide = $slider
            .find('.slide')
            .first()
            .stop(true)
            .animate({
                'opacity': 1
            }, 400);
    }

    function NextSlide() { // 다음 버튼 함수
        stopSlide();
        startSlide();
        $firstSlide = $slider
            .find('.slide')
            .first()
            .appendTo($slider);
        var $lastSlide = $slider
            .find('.slide')
            .last()
            .stop(true)
            .animate({
                'opacity': 0
            }, 400);
        $firstSlide = $slider
            .find('.slide')
            .first()
            .stop(true)
            .animate({
                'opacity': 1
            }, 400);
    }

    $('.right').on('click', function () { //다음버튼 클릭
        NextSlide();
    });
    $('.left').on('click', function () { //이전 버튼 클릭
        PrevSlide();
    });

    startSlide(); // 자동 슬라이드 시작

    var theInterval;

    function startSlide() {
        theInterval = setInterval(NextSlide, 4000); //자동 슬라이드 설정
    }

    function stopSlide() { //자동 멈추기
        clearInterval(theInterval);
    }
    $('.stop').on('click', function () {
        stopSlide();
    });
    $('.play').on('click', function () {
        startSlide();
    });

});

/**********footer*************/
function sitehead() {
    let click = document.getElementById("s_body");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}
/**********up*************/
$("#topbt").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    return false;
});

/*

$(".main_menu2").click(function() {
    $(this).next(".sub2").stop().slideToggle(500);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".sub2").siblings(".sub2").slideUp(500); // 1개씩 펼치기
 });
 */