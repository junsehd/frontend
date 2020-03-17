$(document).ready(function () {

    //언어 메뉴 열고 닫기        
    var bCheck = false;
    $("#lang > h2").click(function () {
        bCheck = !bCheck;
        if (bCheck) {
            $("#lang > ul").addClass("active");
        } else {
            $("#lang > ul").removeClass("active");
        }
        $("#lang > ul > li").click(function () {
            $("#lang > ul > li").removeClass("select");
            $(this).addClass("select");
            var href = $(this).attr("data-link");
            $("a#go_site").attr("href", href);
        });

        $("a#go_site").click(function () {
            $("#lang > ul").removeClass("active")
            bCheck = false;
            $("#lang > ul > li").removeClass("select");
        })
    });

    //메뉴 열고 닫기
    $("#menu > li > h3").click(function () {
        if ($(this).parent("li").attr("class") != "active") {
            $("#menu > li").removeClass("active");
            $(this).parent("li").addClass("active");

            $(".toggle_menu > li").removeClass("active");
        } else {
            $(this).parent("li").removeClass("active");

            $(".toggle_menu > li").removeClass("active");
        }
    });
	
	//미디어쿼리에서 생긴 버그
	$(window).resize(function () {
		var wWidth = $(window).width();
		if (wWidth > 767) {
			$("#search:checked + .search_wrap").css("display","none");
		}else{
			$("#search:checked + .search_wrap").css("display","block");
		}
	});

});
