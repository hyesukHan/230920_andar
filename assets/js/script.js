

    var swiper = new Swiper(".top-banner .swiper", {
        effect : 'fade', 
        loop : true, 
        autoplay: {
            delay: 2000,
          },
    });

    
    var swiper1 = new Swiper(".sc-visual .swiper", {
        effect : 'fade', 
        loop : true, 
        pagination: {
            el: ".swiper-pagination",
          },
        autoplay: {
            delay: 2000,
          },
    });

    var swiper2 = new Swiper(".sc-recomm .swiper", { 
      slidesPerView: 2,
      grid:{
        rows:2,
      },
      spaceBetween: 10, 
      pagination: {
          el: ".swiper-pagination",
        },
        
     });

    var swiper3 = new Swiper(".sc-goods .content .swiper", { 
      slidesPerView: 2.2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        
     });


     $('.header-top .menu').click(function(){
      $('.side-nav').addClass('on');
      $('body').addClass('hidden');
    })

    $('.side-nav .btn-close,.dimmed').click(function(){
      $('.side-nav').removeClass('on');
      $('body').removeClass('hidden');
    })

    $('.header-inner .group-nav .btn-open').click(function(){
      $('.header-inner .group-nav').toggleClass('on');
      $('.header-inner .group-all').slideToggle();
    })

    $('.side-nav .menu-item').click(function(e){
        e.preventDefault();

        if($(this).hasClass('on')){
          $(this).removeClass('on').children('.sub').slideUp();
        }else{
          $(this).addClass('on').children('.sub').slideDown();
        }
    })

    let lastScroll = 0;

    $(window).scroll(function(){
      curr = $(this).scrollTop();

      if(curr>0){
        $('.header').addClass('on');
      }else{
        $('.header').removeClass('on');
      }

      if(curr<lastScroll){
        $('.btn-top').addClass('on');
      }else{
        $('.btn-top').removeClass('on');
      }

      lastScroll = curr;
    })
  
    $(window).trigger('scroll');

    $('.sc-best .tab-nav button').click(function(){
      tab = $(this).data('tab');
      $(this).addClass('on').siblings().removeClass('on');
      $(tab).addClass('active').siblings().removeClass('active');
    })

    fixEl = document.querySelector('.btn-top .top');
    fixEl.addEventListener('click',()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })

