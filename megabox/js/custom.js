(function($){
  // 배너 이미지  슬라이드
        var mySwiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next', //다음 버튼
                prevEl: '.swiper-button-prev', //이전 버튼
            },
            pagination: {
                el: '.swiper-pagination', //동그라미 버튼 부분
                type: 'bullets',
            },
            autoplay: {
                delay: 3000, //3초후 자동으로 플레이
            },
        });

        //영화차트 이미지 슬라이드
        var mySwiper = new Swiper('.swiper-container2', {
            slidesPerView: 4, //화면에 4개만 표시한다.
            spaceBetween: 24, 
            mousewhee1: { //마우스휠이 동작하게 한다.
                invert: true, 
            },
            keyboard: { //키보드로 동작하게한다.
                enable: true,
                onlyInViewport: false,
            },
            autoplay: { //4초마다 자동실행
                delay: 4000,
            },
            breakpoints: { //화면크기를 지정
                //화면이 600일때 1.4개가 보여진다.
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                //화면이 768일때 2개가 보여진다. 
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                //화면이 960일때 3개가 보여진다. 
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });


        // 영화차트 탭 메뉴
        let movBtn = $(".movie_title > ul > li");
        let movCont = $(".movie_chart > div");

        movCont.hide().eq(0).show(); //첫번째만 보이게하고 나머지는 감춰준다.
        
        //버튼을 클릭햇을때 할일
        movBtn.click(function(e) {
            e.preventDefault(); //클릭이벤트 초기화
            let target = $(this); //클릭할때마다 변수를 저장
            let index = target.index(); //클릭한 그 요소의 인덱스 번호를 저장
            movBtn.removeClass("active"); //클릭한 요소의 클래스를 모두 제거
            target.addClass("active"); //클릭한 요소만 클래스를 추가
            movCont.css("display", "none"); //css 속성을 이용해서 안보여지게한다.
            movCont.eq(index).css("display", "block"); //해당되는 번호만 보여주게한다.
        });
        
        // 공지사항 탭 메뉴
        var tabMenu = $(".notice");
        
        // 컨텐츠 내용을 숨긴다.
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();
        
        function tabList(e){
            e.preventDefault(); //#의 기능을 차단
            var target = $(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            //버튼을 클릭하면 형제의 ul을 보여주고 부모의 li를 찾아서 클래스를 추가시켜주고 형제의 li태그에 클래스를 제거하고 제거한 자식의 ul은 숨겨준다
        }
        tabMenu.find("ul > li > a").click(tabList).focus(tabList); 
    

	//모바일 햄버거 메뉴 클릭
	$('.mobile_tab').click(function (e) {
		e.preventDefault();

		$('.mobile_nav').addClass('active');
		$('.transparency').addClass('active');
		$('.container').addClass('active');

		//버튼 바꾸기
		if ($(".mobile_nav").hasClass("active")) {
			$(".mobile_tab a i").css("display", "none");
		}
	});

	//모바일 메뉴 검은화면 부분
	$('.transparency').click(function (e) {
		e.preventDefault();
		$('.mobile_nav').removeClass('active');
		$('.transparency').removeClass('active');
		$('.container').removeClass('active');
        $('.mobile_nav .sub').css('display','none');
		$(".mobile_tab a i").css("display", "block");
	});

	//닫기 버튼 클릭시
	$('.mobile_nav i').click(function (e) {
		e.preventDefault();
		$('.mobile_nav').removeClass('active');
		$('.transparency').removeClass('active');
		$('.container').removeClass('active');
		$(".mobile_tab a i").css("display", "block");
	});

	//모바일 서브 메뉴 보이기 감추기
	$('.mobile_nav > ul > li > a').click(function (e) {
		e.preventDefault();
		var show = $(this).next('.sub').css('display');
		if (show == 'none') {
			$('.sub').slideUp();
			$(this).next().slideDown();
		} else {
			$(this).next().slideUp();
		}

	});
	
 })(jQuery);