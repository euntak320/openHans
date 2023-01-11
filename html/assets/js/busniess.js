

$(function(){

  /*! modernizr 3.6.0 (Custom Build) | MIT *
	* https://modernizr.com/download/?-cssanimations-csspositionsticky-csstransforms-csstransitions-setclasses !*/
	!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?a(s,t||n):s);return!1}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,a,l,f,u="modernizr",c=i("div"),d=p();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=s?s[r]:u+(r+1),c.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+u,(d.fake?d:c).appendChild(o),d.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),a=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=f,_.offsetHeight):c.parentNode.removeChild(c),!!a}function y(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function g(e,n,s,o){function a(){c&&(delete N.style,delete N.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=y(e,s);if(!r(l,"undefined"))return l}for(var c,d,p,m,g,v=["modernizr","tspan","samp"];!N.style&&v.length;)c=!0,N.modElem=i(v.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=N.style[m],f(m,"-")&&(m=u(m)),N.style[m]!==t){if(o||r(s,"undefined"))return a(),"pfx"==n?m:!0;try{N.style[m]=s}catch(h){}if(N.style[m]!=g)return a(),"pfx"==n?m:!0}return a(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?g(a,n,s,o):(a=(e+" "+z.join(i+" ")+i).split(" "),l(a,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",t=i("a"),r=t.style;return r.cssText=e+b.join(n+";"+e).slice(0,-e.length),-1!==r.position.indexOf(n)});var P="Moz O ms Webkit",T=S._config.usePrefixes?P.split(" "):[];S._cssomPrefixes=T;var z=S._config.usePrefixes?P.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",h("transition","all",!0)),s(),o(C),delete S.addTest,delete S.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);

    document.documentElement.style.overflowX = "hidden";

    setTimeout(()=> {
      $('.title_wrap').addClass('on')
      $('.content_image').addClass('on')
    }, 1500)
    
    $(window).scroll(function () {
      var thisScroll = 0;
      var scT = $(this).scrollTop();
      var winH = $(this).height();
      var contentTab  = $('.content_tab ').height();
      
      if (scrollTop > thisScroll + 30 && scrollTop > 30) {
        $('.title_wrap').removeClass('on').addClass('down')
        $('.content_image').removeClass('on').addClass('right')
        
      } else {
        if (scrollTop - thisScroll < 0) {
          $('.title_wrap').removeClass('on')
          $('.content_image').removeClass('on')
          $('.tab_area .view').removeClass('pt120')
        }
        if (scrollTop === 0) {
          $('.title_wrap').removeClass('down').addClass('on')
          $('.content_image').removeClass('right').addClass('on')
        }
      }

      if (scT > contentTab - winH / 2.5) {
        $('.tab_list').addClass('on');
      } else {
        $('.tab_list').removeClass('on');
      }

      if($('.content_type_menu').hasClass('plus')) {
        $('.tab_area .tab_list').addClass('plus');
        $('.tab_area .view').addClass('plus');
      }
      else {
        $('.tab_area .tab_list').removeClass('plus')
        $('.tab_area .view').removeClass('plus');
      }

      $('.scroll_motion').each(function () {
        var motion_top = $(this).offset().top;
        if (scT > motion_top - winH / 1.5) {
          $(this).addClass('on');
        }
      });
    });

  $('.sw').click(function(e){
    e.preventDefault
    var itOffset = $('#sw').offset();
    $('html').animate({scrollTop: itOffset.top - 200}, 400)
  });
  
  $('.service').click(function(e){
    e.preventDefault
    var serviceOffset = $('#service').offset();
    $('html').animate({scrollTop: serviceOffset.top - 200}, 400)
  });
  $('.ui').click(function(e){
    e.preventDefault
    var uiOffset = $('#ui').offset();
    $('html').animate({scrollTop: uiOffset.top - 200}, 400)
  });
  $('.moniter').click(function(e){
    e.preventDefault
    var moniterOffset = $('#moniter').offset();
    $('html').animate({scrollTop: moniterOffset.top - 200}, 400)
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

		if(isMobile) {
			contentInMobile();
		} else {
			contentIn();
		}
	};

	function setProperty() {

		// isMobile = $(window).width() <= 1024 ? true : false;
		scrollHeight = scrollBody.height();
		sectionOffsetTop = scrollBody.offset().top;
		scrollRealHeight = (scrollHeight - $(window).height());
		winScrollTop = $(window).scrollTop();
		sectionScrolTop = winScrollTop - sectionOffsetTop;
		scrollPerecnt =  sectionScrolTop / scrollRealHeight;
		percent = scrollPerecnt * 100;

	};

	function contentIn() {

		var deviceImg = $('.image_view .slide_wrap figure');
		var imgWidth = deviceImg.height();
		console.log(percent);

		if(percent >= -14 && percent < 1) {

			imageChange(imgWidth * 0);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .one').addClass('active');
			$('.fix_motion .fix_wrap .image_view').removeClass('fixed');
		}

		if(percent >= 17 && percent < 50) {

			imageChange(imgWidth * 1);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .two').addClass('active');
			$('.fix_motion .fix_wrap .image_view').removeClass('fixed');
		}

		if(percent >= 50 && percent < 87) {

			imageChange(imgWidth * 2);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .three').addClass('active');
			$('.fix_motion .fix_wrap .image_view').removeClass('fixed');
			
		}

		if(percent >= 87) {

			imageChange(imgWidth * 3);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .four').addClass('active');
			$('.fix_motion .fix_wrap .image_view').addClass('fixed');
		}

		if(percent < -14 ) {
			$('.fix_motion .text_box .one').removeClass('active');
			$('.fix_motion .text_box .two').removeClass('active');
			$('.fix_motion .text_box .three').removeClass('active');
			$('.fix_motion .text_box .four').removeClass('active');
			$('.fix_motion .fix_wrap .image_view').removeClass('fixed');
		}
	};

	function contentInMobile() {

		var deviceImg = $('.image_view .slide_wrap figure');
		var imgWidth = deviceImg.width();

		if(percent >= 5 && percent < 25){

			imageChange(imgWidth * 0);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .txt01').addClass('active');
		}

		if(percent >= 25 && percent < 45) {

			imageChange(imgWidth * 1);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .txt02').addClass('active');
		}

		if(percent >= 45 && percent < 65) {

			imageChange(imgWidth * 2);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .txt03').addClass('active');
		}

		if(percent >= 65 && percent <= 85) {

			imageChange(imgWidth * 3);
			$('.fix_motion .text_box p').removeClass('active');
			$('.fix_motion .text_box .txt04').addClass('active');

		}

		if(percent > 85) {

			imageChange(imgWidth * 3);
			$('.fix_motion .text_box p').removeClass('active');
		}

		if(percent < 0) {

			imageChange(imgWidth * 0);
			$('.fix_motion .text_box p').removeClass('active');
		}

	};

	function imageChange(moveY) {

		if(Modernizr.csspositionsticky) {
			var img = $('.fix_motion .slide_wrap .slide');
			img.css({
				'transform':'translateY('+ -moveY +'px)'
			});
		}
	};

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



});


