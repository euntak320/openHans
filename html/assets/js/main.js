  $(function(){

  setTimeout(() => {
    $('.first_swiper').addClass('on');
  },1000)

  mainBackground()

  // 상단 메인 키비 슬라이드
	var mainFisrtSection = new Swiper(".first_swiper", {
    autoplay: true,
    speed : 2500,
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

  // Slide Change Event
  mainFisrtSection.on('slideChange', function () {
    var timer = 0;
    setInterval(function(){
      if(timer>11){
        timer = 0;
      }
      $('.bg_area span').removeClass('on');
      $('.bg_area span').eq(timer).toggleClass('on');
      timer++;
    },100);
  });


  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false,
    });
  });


  var mainThridImageSection = new Swiper('.thrid_area .image_swiper', {
    loop:true,
    autoplay: true, // 자동재생
    slidesPerView: 1,
    watchSlidesProgress :true,
    effect:'fade',
    delay: 5000
  });

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
    thumbs: {
      swiper: mainThridImageSection,
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
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    loop:true,
    slidesPerView: 3.5,
    spaceBetween: 37,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      loop: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
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
    $(".activeslide > span").text(activeslide + 1);
    $(".totalslide").text(totalslide / 2);
  });

  $(window).scroll(function(){
    var scT = $(this).scrollTop();
		var winH = $(this).height();
    var businessArea  = $('.second_area').offset().top;
    var itArea  = $('.it').offset().top;
    var supArea  = $('.supply').offset().top;
    var serArea  = $('.service').offset().top;
    var helArea  = $('.health').offset().top;
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



function mainBackground(){
  var timer = 0;
  setInterval(function(){
    if(timer>11){
        timer = 0;
    }
    $('.bg_area span').removeClass('on');
    $('.bg_area span').eq(timer).toggleClass('on');
    timer++;
  },100);
}

