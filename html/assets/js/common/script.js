$(function () {

	$("#top").click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
		return false;
	});

	motion_scroll()
	
	var windowWidth = $(window).width();
	var thisScroll = 20;
	var $header = $('header');
	var $tabButton = $('.tab_area .tab_list button');
	var $tabView = $('.tab_area .view');
	var $layerClose = $('.layer_wrap button');
	var $layerAccessibility = $('.layer_accessibility');
	// var $layerCloseTwo = $('.layer_wrap');
	

	// header
	
	$header.mouseenter(function () {
		$(this).addClass('open')
	})
	$header.mouseleave(function () {
		$(this).removeClass('open')
	})

	
	$(window).scroll(function(e) {
		scrollTop = $(window).scrollTop();
		if (scrollTop > thisScroll+5 && scrollTop>5) {
			if(windowWidth > 1400) {
				$("header").addClass("scroll_menu");
			}
			else {
				$("header").addClass("fixed");
			}
		} else {
			if (scrollTop === 0) {
				if(windowWidth > 1400) {
					$("header").removeClass("scroll_menu");
				}
				else {
					$("header").removeClass("fixed");
				}
			}
		}
		thisScroll = $(window).scrollTop()
	});

	 $(document).on("click",".accordian_wrap .accordian_title",function() {	
	 	if($(this).hasClass('on')){		
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
	$layerClose.click(function(){
		$('html,body').css('overflow','visible');
		$(this).parents('.layer_wrap').fadeOut();
	});
	$layerAccessibility.click(function(){
		$('html,body').css('overflow','hidden');
		$('.layer_wrap').fadeIn();
	});

	//  tab	
	$tabButton.click(function(){
		$tabButton.removeClass('on');
		$tabButton.eq($(this).index()).addClass('on')
		$tabView.removeClass('on');
		$tabView.eq($(this).index()).addClass('on')
	});	

	$('.com_select .title').click(function(){
		$(this).next().toggleClass('on');
	});


	// 반응형
	if (windowWidth <= 1400) {

		$header.mouseenter(function () {
			$(this).removeClass('open')
		})

		$('.menu_area>ul> li > a').mouseenter(function(){
			$(this).each(function(){
				$('.menu_area>ul> li').removeClass('on');
				$(this).parents('li').addClass('on');
			})
		});

		$('.mobile_btn').click(function(){
			$(this).toggleClass('close')
			$(this).parents('.gnb_area').find('.menu_area').toggleClass('on');
		})

	}
});

function motion_scroll(){
	$(window).on('scroll',function(){
		var scT = $(this).scrollTop();
		var winH = $(this).height();
		
		$('.scroll_motion').each(function(){
				var motion_top = $(this).offset().top;
				if(scT > motion_top-winH/1.5){
						$(this).addClass('on');
				}
		});
	}).scroll();
}
