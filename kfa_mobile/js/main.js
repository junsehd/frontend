$(function () {
    //검색버튼 부분
    $(".main_header .search").click(function () {
        $(".main_header form").toggleClass("active");
    });
    //메뉴버튼 부분 
    $(".main_header .toggle").click(function () {
        $("body").toggleClass("active");
        $(".main_header .toggle").css("display","none");
        $(".main_header .close").css("display","block");
    });
    
    $(".main_header .close").click(function () {
        $("body").toggleClass("active");
        $(".main_header .close").css("display","none");
        $(".main_header .toggle").css("display","block");
    });
    
    //리스트 메뉴 부분
    $(".list_toggle a").click(function (e) {
        e.preventDefault();
        $(".list_toggle a").removeClass("on");
        $(this).addClass("on");

        if ($(this).hasClass("list_btn")) {
            $(".products_list").addClass("list_view");
        } else {
            $(".products_list").removeClass("list_view");
        }

    });
    
    //리스트 메뉴의 내용을 복사해서 target에 삽입
    var listViewTitle = $(".products_list li");
    listViewTitle.each(function () {
        var newTitle = $(this).find(".titles h2");
        var target = $(this).find("footer");

        newTitle.clone().prependTo(target);
    });
    
    //브라우저의 히스토리를 확인해서 이전페이지로 돌아간다.
    $(".back").click(function(){
        history.go(-1);
    });
    
    //장바구니 탭메뉴
    $(".mypage_tap01").css("display","block");
    $(".mypage_tap02").css("display","none");
			
    //mypage_tap01
    $(".btn1").click(function(){
        $(".mypage_tap01").css("display","block");
        $(".mypage_tap02").css("display","none");
        $(this).removeClass("on");
        $(this).addClass("on");
    });
    
    //mypage_tap02
    $(".btn2").click(function(){
        $(".mypage_tap01").css("display","none");
        $(".mypage_tap02").css("display","block");
        $(this).removeClass("on");
        $(this).addClass("on");
    });

});
