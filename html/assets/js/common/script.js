$(function () {

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
			$("header").addClass("scroll_menu");
			$(".main_content").addClass("off")
		} else {
			if(scrollTop - thisScroll < 0){
				$(".main_content").removeClass("off")
			}
			if (scrollTop === 0) {
				$("header").removeClass("scroll_menu");
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

	// $layerCloseTwo.click(function(){
	// 	$('html,body').css('overflow','visible');
	// 	$(this).fadeOut();
	// })

	$layerAccessibility.click(function(){
		$('html,body').css('overflow','visible');
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


})