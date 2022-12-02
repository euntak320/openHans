$(function(){

  // 상단 메인 키비 슬라이드
	var mainFisrtSection = new Swiper(".first_area", {
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