$(document).ready(function(){
       /* 배너부분 슬라이드 제이쿼리 */
        $("#owl-demo").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: 3000,
            navigation: false
        });

        /* 글로벌네트워크 맵부분 제이쿼리  */
        var tab = $(".gmlink > ul > li");
        var menu = $(".gmimg > div");

        tab.click(function() {
            var target = $(this);
            var target_Class = target.find('a');
            
            tab.find("a").removeClass("active");
            target_Class.addClass("active");
            var num = target.index();

            menu.css("display", "none");
            menu.eq(num).css("display", "block");
        });
});