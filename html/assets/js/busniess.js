$(function(){

  setTimeout(()=> {
    $('.content_title').addClass('on')
    $('.explain_text').addClass('on')
    $('.content_image').addClass('on')
  }, 500)

  var $root = $('html, body');
  $('.tab_list a[href^="#"]').click(function(e) {
    e.preventDefault
    var href = $.attr(this, 'href');
    $root.animate({scrollTop: $(href).offset().top}, 500, function () {
      window.location.hash = href;
    });
  });

  var controller = new ScrollMagic.Controller();

  var firstArea = new TimelineMax()
      firstArea
      .fromTo(".content_title, .explain_text", {y: 0, opacity:1}, {duration:1, y : 150, opacity:0})
      .fromTo(".content_image",{opacity:1}, {duration:1, marginLeft:0, width:1400, x: 1500, opacity:0})
      .fromTo('.service_list',{opacity:0}, {duration:1, opacity:1})

      .add('firstArea')
      .fromTo('.service_title.one, .image_area .img.one',{opacity:1}, {duration:1, opacity:0, y:-500})
      .fromTo('.explain_area.one',{opacity:1}, {duration:2, opacity:0, y:500}, 'firstArea')

      .add('secondArea')
      .fromTo('.service_title.two, .image_area .img.two',{opacity:1}, {duration:1, opacity:1, y:-500})
      .fromTo('.explain_area.two',{opacity:1}, {duration:2, opacity:0, y:500}, 'secondArea')

      .add('threeArea')
      .fromTo('.service_title.three, .image_area .img.three', {opacity:1},{duration:1, opacity:1, y:-500})
      .fromTo('.explain_area.three', {opacity:1},{duration:2, opacity:0, y:500}, 'threeArea')

      .add('fourArea')
      .fromTo('.service_title.four, .image_area .img.four', {opacity:1},{duration:1, opacity:1, y:-500})
      .fromTo('.explain_area.four', {opacity:1},{duration:2, opacity:0, y:500}, 'fourArea')



  
  var scene1 = new ScrollMagic.Scene({
      triggerElement: ".one", // �곸뿭�쒖옉
      triggerHook: "0", // �곷떒 �꾩튂
      duration: "500%",  // �꾨떖�덉쓣��
      
  })
  .setPin(".one") // �섏씠吏�怨좎젙
  .setTween(firstArea)
  .addIndicators() 
  .addTo(controller);

});