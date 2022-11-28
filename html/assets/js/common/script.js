$(function () {

	var thisScroll = 20;

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

})