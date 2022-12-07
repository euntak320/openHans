$(function(){

  $(".fullpage").fullpage({
    navigator:false,
    anchor: ['itArea','supplyArea','serviceArea','healthArea'], 
    onLeave : function(index, nextIndex , direction){				
			$("pagnation ul li").removeClass("on");				
			$("pagnation ul li").eq(nextIndex-1).addClass("on");
    },
  });	

  $(".pagnation ul li").click(function(){

    var $this = $(this).index();
    $.fn.fullpage.moveTo($this + 2 );
    
    return false;
  });


  setTimeout(() => {
    $('.bg_area').remove();
    $('.first_swiper').addClass('on');
  },1300)



  mainBackground()
  // 상단 메인 키비 슬라이드
	var mainFisrtSection = new Swiper(".first_swiper", {
    // autoplay: true, // 자동재생
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


  var mainThridImageSection = new Swiper('.image_swiper', {
    // autoplay: true, // 자동재생
    slidesPerView: 1,
    watchSlidesProgress :true,
  });

  var mainThridTextSection = new Swiper('.text_swiper', {
    // autoplay: true, // 자동재생
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
      mainThridTextSection.autoplay.start();
      $(this).removeClass("start");
      $(this).addClass("stop");
      return false;
    }
  });


  var mainForthSection = new Swiper('.forth_area .swiper-area', {
    // autoplay:true,
    slidesPerView: 3.5,
    spaceBetween: 37,
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