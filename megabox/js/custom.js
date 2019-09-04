(function($){
  // 배너 이미지  슬라이드
        var mySwiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 3000,
            },
        });

        //영화차트 이미지 슬라이드
        var mySwiper = new Swiper('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 24,
            mousewhee1: {
                invert: true,
            },
            keyboard: {
                enable: true,
                onlyInViewport: false,
            },
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                // when window width is <= 320px
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                // when window width is <= 480px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                // when window width is <= 640px
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });


        // 영화차트 탭 메뉴
        let movBtn = $(".movie_title > ul > li");
        let movCont = $(".movie_chart > div");

        movCont.hide().eq(0).show();

        movBtn.click(function(e) {
            e.preventDefault();
            let target = $(this);
            let index = target.index();
            movBtn.removeClass("active");
            target.addClass("active");
            movCont.css("display", "none");
            movCont.eq(index).css("display", "block");
        });
        
        // 공지사항 탭 메뉴
        var tabMenu = $(".notice");
        
        // 컨텐츠 내용을 숨겨주세요 !
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();
        
        function tabList(e){
            e.preventDefault(); //#의 기능을 차단
            var target = $(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            //버튼을 클릭하면 형제의 ul을 보여주고 부모의 li를 찾아서 클래스를 추가시켜주고 형제의 li태그에 클래스를 제거하고 제거한 자식의 ul은 숨겨준다.
        }
        tabMenu.find("ul > li > a").click(tabList).focusin(tabList);
 })(jQuery);