$(function () {

	var thisScroll = 20;
	var $header = $('header');
	var $tabButton = $('.tab_area .tab_list button');
	var $tabView = $('.tab_area .view');
	var $layerClose = $('.layer_wrap button');
	

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

	// var container = $('.accordian_area');
  // container.find('.accordian_title').click(function() {
	// 	$(this).toggleClass('on');
  //   if($(this).siblings('.answer_area').css('display') == 'block'){
  //     container.find('.answer_area').slideUp();
  //   } else {
  //     container.find('.answer_area').slideUp();
	// 		$(this).siblings('.answer_area').slideDown();
  //   }
  // });

	$('.accordian_area .accordian_title').click(function(){
		$(this).toggleClass('on');
		$(this).next('.answer_area').slideToggle();
	})
	
  

	//layer
	$layerClose.click(function(){
		$(this).parents('.layer_wrap').hide();
	});

	//  tab	
	$tabButton.click(function(){
		$tabButton.removeClass('on');
		$tabButton.eq($(this).index()).addClass('on')
		$tabView.removeClass('on');
		$tabView.eq($(this).index()).addClass('on')
	});	


})