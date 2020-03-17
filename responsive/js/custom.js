(function($){
    
        //접기 펼치기
        $(".btn").click(function(e){
            e.preventDefault();
            $(".nav").slideToggle();
            //open 클래스 생성
            $(".btn").toggleClass("open");
            
            if($(".btn").hasClass("open")){
                //open 있을때
                $(".btn").find("i").attr("class","fa fa-angle-up"); //attr 속성을 변경하고 가져올수 있음
            } else{
                //open이 없을때
                $(".btn").find("i").attr("class","fa fa-angle-down");
            }
        });
        
        //미디어쿼리에서 생긴 버그를 해결 600이되면 사라짐
        $(window).resize(function(){
           var wWidth = $(window).width();
            if(wWidth > 600){
                $(".nav").removeAttr("style");
            }
        });
        
        //라이트 박스
        $(".lightbox").lightGallery({
            autoplay: true,
            pause : 3000,
            progressBar : true,
        });

        //이미지 슬라이더
        //breakpoint : 중단점 화면이 600해상도가 되면 자동플레이를 정지한다.
        $(".slider").slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    autoplay: false,
                }
            }]
        });
    
        // sns 공유하기
        //http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
        //http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
        //https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
        //https://plus.google.com/share?url={페이지링크}&t={페이지 제목}
        $(".facebook").click(function(e) {
            e.preventDefault();
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
        });
        $(".twitter").click(function(e) {
            e.preventDefault();
            window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' + encodeURIComponent(document.URL) + '%20-%20' + encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
        });
})(jQuery);