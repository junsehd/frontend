(function ($) {
    // 서브 메뉴 영화관 선택 & 공지사항 탭 메뉴
    var tabMenu = $(".notice");

    // 컨텐츠 내용을 숨긴다.
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e) {
        e.preventDefault(); //#의 기능을 차단
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        //버튼을 클릭하면 형제의 ul을 보여주고 부모의 li를 찾아서 클래스를 추가시켜주고 형제의 li태그에 클래스를 제거하고 제거한 자식의 ul은 숨겨준다.
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);

    //영화관 선택 메뉴
    $(".menu li").click(function (e) {
        e.preventDefault();
        var target = $(this);
        var idx = target.index();

        $(".menu li").removeClass("active");
        target.addClass("active");

    });

    //큐레이션 & 특별관 & 스토어 배너 선택 메뉴
    $(".bm_bottom li").click(function (e) {
        e.preventDefault();
        var target = $(this);
        var idx = target.index();

        $(".bm_bottom li").removeClass("active");
        target.addClass("active");

    });

    $(".bm_bottom2 li").click(function (e) {
        e.preventDefault();
        var target = $(this);
        var idx = target.index();

        $(".bm_bottom2 li").removeClass("active");
        target.addClass("active");
    });

    /* 서브페이지 탭메뉴 클릭 */
    var contents = $(".store_list .sub_list");
	
    $(".sub_tab ul li").click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        // alert(index);

        var section = contents.eq(index);
        var offset = section.offset().top;
        $("html, body").stop().animate({scrollTop: offset},600);
    });

})(jQuery);
