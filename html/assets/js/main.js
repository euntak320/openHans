  $(function(){

  setTimeout(() => {
    $('.first_swiper').addClass('on');
  },1000)


  // 상단 메인 키비 슬라이드

  
	var mainFisrtSection = new Swiper(".first_swiper", {
    effect:'fade',
    autoplay: true,
    speed : 5000,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span>0'+(index + 1) + '</span>' + '</span>';
      },
    },
    a11y: { 
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',   
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
    on: {
      slideChange: function () {
        var idx = this.realIndex

        if (idx === 0) {
          $(".swiper-slide").removeClass('on')
          $(".swiper-slide.one").addClass("on");
        } 
        if (idx === 1) {
          $(".swiper-slide").removeClass('on')
          $(".swiper-slide.two").addClass('on')
        }
      }
    },
  })

  $(".first_area button").on('click', function () {
    if ($(this).hasClass("stop")) {
      mainFisrtSection.autoplay.stop();
      $(this).removeClass("stop");
      $(this).addClass("start");
      return false;
    } else {
      mainFisrtSection.autoplay.start();
      $(this).removeClass("start");
      $(this).addClass("stop");
      return false;
    }
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".image").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false,
    });
  });

  
  

    var scrollBody = $('.fix_motion');
    var scrollHeight;
    var sectionOffsetTop;
    var sectionScrolTop;
    var scrollRealHeight;
    var winScrollTop;
    var scrollPerecnt;
    var percent;
    var isMobile;

    function scrollFunc() {

      setProperty();
      contentIn();

      // if(isMobile) {
      //   contentInMobile();
      // } else {
      //   contentIn();
      // }
    };

    function setProperty() {

      isMobile = $(window).width() <= 1024 ? true : false;
      scrollHeight = scrollBody.height();
      sectionOffsetTop = scrollBody.offset().top;
      scrollRealHeight = (scrollHeight - $(window).height());
      winScrollTop = $(window).scrollTop();
      sectionScrolTop = winScrollTop - sectionOffsetTop;
      scrollPerecnt =  sectionScrolTop / scrollRealHeight;
      percent = scrollPerecnt * 100;

    };

    function contentIn() {

      var scrollBody = $('.fix_motion');
      var deviceImg = $('.image_area .image');

      if(percent >= 0 && percent < 30) {
        scrollBody.addClass('red')
        $('.fix_motion .text_box p').removeClass('active');
        $('.fix_motion .text_box .one').addClass('active');
      }

      if(percent >= 30 && percent < 60) {
        scrollBody.removeClass('purple')
        scrollBody.removeClass('green')
        scrollBody.removeClass('red')
        scrollBody.addClass('blue')
        $('.fix_motion .text_box p').removeClass('active');
        $('.fix_motion .text_box .two').addClass('active');
      }

      if(percent >= 60 && percent < 95) {
        scrollBody.removeClass('red')
        scrollBody.removeClass('green')
        scrollBody.removeClass('blue')
        scrollBody.addClass('purple')
        $('.fix_motion .text_box p').removeClass('active');
        $('.fix_motion .text_box .three').addClass('active');
      }

      if(percent >= 95) {
        scrollBody.removeClass('red')
        scrollBody.removeClass('blue')
        scrollBody.removeClass('purple');
        scrollBody.addClass('green ')
        $('.fix_motion .text_box p').removeClass('active');
        $('.fix_motion .text_box .four').addClass('active');
      }

      if(percent < 12 ) {
        scrollBody.removeClass('green')
        scrollBody.removeClass('blue')
        scrollBody.removeClass('purple')
        scrollBody.removeClass('green')
        $('.fix_motion .text_box .one').removeClass('active');
        $('.fix_motion .text_box .two').removeClass('active');
        $('.fix_motion .text_box .three').removeClass('active');
        $('.fix_motion .text_box .four').removeClass('active');
      }
    };

    // function contentInMobile() {

    //   var deviceImg = $('.image_area .image');
    //   var imgWidth = deviceImg.width();

    //   if(percent >= 5 && percent < 25){

    //     imageChange(imgWidth * 0);
    //     $('.fix_motion .text_box p').removeClass('active');
    //     $('.fix_motion .text_box .txt01').addClass('active');
    //   }

    //   if(percent >= 25 && percent < 45) {

    //     imageChange(imgWidth * 1);
    //     $('.fix_motion .text_box p').removeClass('active');
    //     $('.fix_motion .text_box .txt02').addClass('active');
    //   }

    //   if(percent >= 45 && percent < 65) {

    //     imageChange(imgWidth * 2);
    //     $('.fix_motion .text_box p').removeClass('active');
    //     $('.fix_motion .text_box .txt03').addClass('active');
    //   }

    //   if(percent >= 65 && percent <= 85) {

    //     imageChange(imgWidth * 3);
    //     $('.fix_motion .text_box p').removeClass('active');
    //     $('.fix_motion .text_box .txt04').addClass('active');

    //   }

    //   if(percent > 85) {

    //     imageChange(imgWidth * 3);
    //     $('.fix_motion .text_box p').removeClass('active');
    //   }

    //   if(percent < 0) {

    //     imageChange(imgWidth * 0);
    //     $('.fix_motion .text_box p').removeClass('active');
    //   }

    // };

    function init() {

      scrollFunc();

    };

    $(window).scroll(function() {

      scrollFunc();
    });

    $(window).resize(function() {

      scrollFunc();
    });

    init();

  var mainThridTextSection = new Swiper('.thrid_area .text_swiper', {
    effect:'fade',
    loop:true,
    autoplay: false, // 자동재생
    delay: 5000,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    a11y: { 
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',   
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
  })

  $(".thrid_area button").on('click', function () {
    if ($(this).hasClass("stop")) {
      mainThridTextSection.autoplay.stop();
      $(this).removeClass("stop");
      $(this).addClass("start");
      return false;
    } else {
      mainForthSection.autoplay.start();
      $(this).removeClass("start");
      $(this).addClass("stop");
      return false;
    }
  });


  var mainForthSection = new Swiper('.forth_area .swiper-area', {
    autoplay:false,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    loop:true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      loop: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      1200 : {
        slidesPerView: 3.5,
        spaceBetween: 37,
      }
    },
    a11y: { 
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',   
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    }
  });
  
  $(".forth_area button").on('click', function () {
    if ($(this).hasClass("stop")) {
      mainForthSection.autoplay.stop();
      $(this).removeClass("stop");
      $(this).addClass("start");
      return false;
    } else {
      mainForthSection.autoplay.start();
      $(this).removeClass("start");
      $(this).addClass("stop");
      return false;
    }
  });

  mainForthSection.on('slideChange', function () {
    var activeslide = mainForthSection.realIndex;
    var totalslide = mainForthSection.slides.length;
    var isMobile = $(window).width() <= 1200 ? true : false;

    $(".activeslide > span").text(activeslide + 1);
       if(isMobile) {
        $(".totalslide").text(totalslide / 2 + 3);
      } else {
        $(".totalslide").text(totalslide / 2 );
      }

    
  });

  $(window).scroll(function(){
    var scT = $(this).scrollTop();
		var winH = $(this).height();
    var businessArea  = $('.second_area').offset().top;
    var itArea  = $('.one').offset().top;
    var supArea  = $('.two').offset().top;
    var serArea  = $('.three').offset().top;
    var helArea  = $('.four').offset().top;
    var qnaArea = $('.thrid_area').offset().top;
    var newArea = $('.forth_area').offset().top;

    if (scT > businessArea - winH / 1.2) {
      $('.pagnation').fadeIn();

    } 
    else if (scT == qnaArea  )  {
      $('.pagnation').hide();
    }
    else {
      $('.pagnation').hide();
    }
		
    if( scT > itArea - winH / 1.5) {
      $('.pagnation ul li').removeClass('on');
      $('.pagnation ul li:nth-child(1)').addClass('on')
    }

    if( scT > supArea - winH / 1.5) {
      $('.pagnation ul li').removeClass('on');
      $('.pagnation ul li:nth-child(2)').addClass('on')
    }
    if( scT > serArea - winH / 1.5) {
      $('.pagnation ul li').removeClass('on');
      $('.pagnation ul li:nth-child(3)').addClass('on')
    }

    if( scT > helArea - winH / 1.5) {
      $('.pagnation ul li').removeClass('on');
      $('.pagnation ul li:nth-child(4)').addClass('on')
    }

    if (scT > qnaArea - winH / 1) {
      mainThridTextSection.autoplay.start();
      $('.thrid_area').addClass('on');

    } 
    if (scT > newArea - winH / 1.3) {
      mainForthSection.autoplay.start();
      $('.forth_area').addClass('on');
    } 

    $('.text_area').each(function () {
			var motion_top = $(this).offset().top;
			if (scT > motion_top - winH / 1) {
				$(this).addClass('on');
			} else {
				$(this).removeClass('on');
			}
		});
  });

});
