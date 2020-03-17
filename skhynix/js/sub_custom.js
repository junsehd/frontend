$(document).ready(function(){  
        /* 서브배너 메뉴 */
        $('.sub_banner .locator .path ul li').hover(function(){
            var target = $(this).index();

            $('.sub_banner .locator .path ul li:eq('+target+') .list').show();
        }, function(){
            $('.sub_banner .locator .path ul li .list').hide();
        });

        $('.sub_tab ul li').eq(0).addClass('on');
    
        /* 서브페이지 탭메뉴 클릭 */
            var contents = $("#contents .sub_sec");
            $(".sub_tab ul li").click(function(e){
                e.preventDefault();
                var target = $(this);   
                var index = target.index(); 
                // alert(index);

                var section = contents.eq(index);   
                var offset = section.offset().top - 100; 
                // alert(offset);
                $("html, body").stop().animate({scrollTop:offset},400);
        }); 
    
        /* 서브 탭메뉴 스크롤 */
        var sub_tab_oft = $('.sub_tab').offset().top;
        
        $(window).scroll(function(){
        /* scroll fixed */
        var win_st = $(window).scrollTop();
        if(sub_tab_oft < win_st){
            $('.sub_tab').css({position: 'fixed',top: '10px','z-index': 1});
        }
        else if(sub_tab_oft >= win_st){
            $('.sub_tab').css({position: 'relative',top: 0});
        }
            
        /* 스크롤 ON */
        for(var i = 0; i < $('.sub_sec').length; i++){
            // console.log(i)
            if(($('.sub_sec').eq(i).offset().top - 150) < win_st){
                $('.sub_tab ul li').removeClass('on');
                $('.sub_tab ul li').eq(i).addClass('on');
            } 
        }
    })   
});