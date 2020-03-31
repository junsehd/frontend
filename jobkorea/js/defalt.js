$(document).ready(function(){
    var swiper = new Swiper('.slide1', {
        direction: 'vertical',
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
        },
        loop: true
      });

      $('.search10 .more').on('click',function(){
          $('.search10').toggleClass('on');
      });
});