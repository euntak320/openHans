$(function () {

	$("#top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	motion_scroll()

	var windowWidth = $(window).width();
	var thisScroll = 0;
	var $header = $('header');
	var $tabButton = $('.tab_area .tab_list button, .tab_area .tab_list a ');
	var $tabView = $('.tab_area .view');
	var $layerClose = $('.layer_wrap button');
	var $layerAccessibility = $('.layer_accessibility');
	var $gnbMenu = $('.menu_area .menu_title');
	// var $layerCloseTwo = $('.layer_wrap');


	// gnb
	$gnbMenu.mouseenter(function () {
		$header.addClass('open')
		$('.content_type_menu').addClass('hide');
		$(this).each(function () {
			$('.menu_area>ul> li').removeClass('on');
			$(this).parents('li').addClass('on');
		})
	});

	$header.mouseleave(function(){
		$(this).removeClass('open')
		$('.content_type_menu').removeClass('hide');
	});

	// 반응형

	$('.gnb_area .mobile_btn').click(function () {
		$(this).toggleClass('close')
		$(this).parents('.gnb_area').find('.menu_area').toggleClass('on');
		$('html, body').toggleClass('overflow')
	})

	$('.content_type_menu .mobile_title').click(function(){
		$(this).next('ul').toggleClass('on');
	});


	var $root = $('html, body');
	$('.tab_list a[href^="#"]').click(function(e) {
		e.preventDefault;
		var href = $.attr(this, 'href');				
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
	});


	$(window).scroll(function () {
		scrollTop = $(window).scrollTop();

		if (scrollTop > thisScroll + 5 && scrollTop > 5) {
			$header.addClass("up")
			$('.content_type_menu').show().removeClass('plus').addClass('down');
		} else {
			if (scrollTop - thisScroll < 0) {
				$header.removeClass("up")
				$('.content_type_menu').removeClass('down').addClass('plus');
			}
			if (scrollTop === 0) {
				$('.content_type_menu').hide();
			}
		}
		
		thisScroll = $(window).scrollTop()
	});



	$(document).on("click", ".accordian_wrap .accordian_title", function () {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).siblings('.answer_area').stop().slideUp(300);
		} else {
			$(".accordian_wrap").find('.accordian_area .accordian_title').removeClass('on');
			$(this).addClass('on');
			$(".accordian_wrap").find('.accordian_area .answer_area').stop().slideUp(300);
			$(this).siblings('.answer_area').stop().slideDown(300);
		}
	});

	//layer
	$layerClose.click(function () {
		$('html,body').css('overflow', 'visible');
		$(this).parents('.layer_wrap').fadeOut();
	});
	$layerAccessibility.click(function () {
		$('html,body').css('overflow', 'hidden');
		$('.layer_wrap').fadeIn();
	});

	//  tab	
	$tabButton.click(function () {
		$tabButton.removeClass('on');
		$tabButton.eq($(this).index()).addClass('on')
		$tabView.removeClass('on');
		$tabView.eq($(this).index()).addClass('on')
	});

	$('.com_select .title').click(function () {
		$(this).parents('.com_select').toggleClass('on');
		$(this).next().toggleClass('on');
	});

	//  달력
	$(".datepicker").datepicker({
		showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		buttonImage: "../assets/images/recurit/icon-calendar.png", // 버튼 이미지
		buttonImageOnly: true,
		changeMonth: true,
		changeYear: true,
		minDate: '-100y',
		nextText: '다음 달',
		prevText: '이전 달',
		numberOfMonths: [1, 1],
		stepMonths: 3,
		yearRange: 'c-100:c+10',
		showButtonPanel: true,
		currentText: '오늘 날짜',
		closeText: '닫기',
		dateFormat: "yy-mm-dd",
		showMonthAfterYear: true,
		dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
	});

	$(".file_upload input[type='file']").on("change", function (event) {
		$(this).parents(".input_box").find('.file_list_area').append("<div class='file_item'><span class='file-value'>" + event.target.files[0].name + "</span> <span class='close'>닫기</span></div>");

		$('.file_list_area .close').click(function () {
			$(this).parents('.file_item').hide();
		});
	});

});

function motion_scroll() {
	$(window).on('scroll', function () {
		var scT = $(this).scrollTop();
		var winH = $(this).height();

		$('.scroll_motion').each(function () {
			var motion_top = $(this).offset().top;
			if (scT > motion_top - winH / 1.3) {
				$(this).addClass('on');
			}
		});

		$('.sticky').each(function () {
			var motion_top = $(this).offset().top;
			if (scT > motion_top - winH / 4.5) {
				$(this).addClass('on');
			} else {
				$(this).removeClass('on');
			}
		});

		$('.text_area').each(function () {
			var motion_top = $(this).offset().top;
			if (scT > motion_top - winH / 1.3) {
				$(this).addClass('on');
			} else {
				$(this).removeClass('on');
			}
		});

		$('.category_area').each(function() {
			var motion_top = $(this).offset().top;
			if(scT > motion_top -winH / 1.3) {
				if (scT > motion_top - winH / 1.3) {
					$(this).addClass('fixed');
				} else {
					$(this).removeClass('fixed');
				}	
			}
		})
	}).scroll();
}
