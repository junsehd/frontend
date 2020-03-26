$(document).ready(function () {
    //이미지 슬라이더
    $(".img_slide").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                autoplay: false,
            }
            }]
    });
    
    
    //SNS 영역 슬라이드
    var visual = $(".sns_cover ul"); //이미지 사진
	var btn = $(".sns_cover .pager ol li"); //불릿 버튼
    
    var current = 0; //전역변수 설정
    var id; //전역변수 설정
    
    btn.click(function () {
        var target = $(this).index();

        visual.stop().animate({"margin-left": -target * 100 + "%"}, 500); //마진 왼쪽으로 -100%, -200% 이동하게끔 설정

        btn.removeClass("on"); //클래스를 지정해서 컬러를 변경
        $(this).addClass("on");
        
        current = target; //0,1,2 인덱스 번호를 변수에 저장
    });
    
    pager(); //함수호출
    
	//pager라는 함수를 생성해서 주기적으로 반복하는 setInterval 함수생성하고 변수에 저장
    function pager(){
        id = setInterval(function(){
            var n = current + 1; //인덱스번호가 0번이면 n = 1
			console.log(n);
            if(n == 3){ //만일 3이 되면 0으로 바꾸어준다.
                n = 0;
            }
            
            btn.eq(n).trigger("click"); //강제로 1~3번 클릭
            
        },3000);
    }
	
    //슬라이드에 마우스를 올리면
    $(".sns_cover").mouseover(function(){
        clearInterval(id); //반복함수 setInterval을 정지 
    });
	
    //슬라이드에 마우스를 때면
    $(".sns_cover").mouseout(function(){
        pager();
    });
    
    
    //헤더메뉴 스크롤 효과
    $(window).scroll(function () {
        var scr = $(window).scrollTop();

        if (scr > 0) {
            $("header").stop().animate({
                "top": "-80px"
            }, 400);
        } else {
            $("header").stop().animate({
                "top": "0px"
            }, 400);
        }
    });

    //서브 배너 이미지 슬라이더
    $(".sub_slide").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                autoplay: false,
            }
            }]
    });

    
    /* dot 메뉴 패럴럭스 */
    var dot = $("#dot > ul > li");
    var cont = $("#contents > section");

    dot.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);
        var list = cont.eq(index);
        var offset = list.offset().top - 150;
        $("html,body").stop().animate({
            scrollTop: offset
        }, 600, "easeInOutExpo");
		
		//색상 변경
		dot.removeClass("on");
        $(this).addClass("on");
    });
});
