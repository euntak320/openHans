$(function () {

	var thisScroll = 20;

	var $tabButton = $('.tab_area .tab_list button')
	var $tabView = $('.tab_area .view')

	// header
	const $header = $('header');

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

	//  tab	
	$tabButton.click(function(){
		$tabButton.removeClass('on');
		$tabButton.eq($(this).index()).addClass('on')
		$tabView.removeClass('on');
		$tabView.eq($(this).index()).addClass('on')
	});	


})