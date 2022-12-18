$(function(){

  setTimeout(()=> {
    $('.content_title').addClass('on')
    $('.explain_text').addClass('on')
    $('.content_image').addClass('on')
  }, 100)

  var $root = $('html, body');
  $('.tab_list a[href^="#"]').click(function(e) {
    e.preventDefault
    var href = $.attr(this, 'href');
    $root.animate({scrollTop: $(href).offset().top}, 1500, function () {
      window.location.hash = href;
    });
  });

  var controller = new ScrollMagic.Controller();

  var firstArea = new TimelineMax()
  firstArea
  .fromTo(".content_title, .explain_text", {y: 0, opacity:1}, {duration:1, y : 1150, opacity:0})
  .fromTo(".content_image",{opacity:1}, {duration:1, marginLeft:0, width:1400, x: 11500, opacity:0})
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".one", // �곸뿭�쒖옉
    triggerHook: "0", // �곷떒 �꾩튂
    duration: "100%",  // �꾨떖�덉쓣��
  })
  .setPin(".one") // �섏씠吏�怨좎젙
  .setTween(firstArea)
  .addIndicators() 
  .addTo(controller);


var secondArea = new TimelineMax()
  secondArea
  .add('first')
  .to('.service_title.one, .image_area .img.one',{duration:1.5,opacity:0}, 'first')
  .to('.explain_area.one',{duration:1.5, opacity:0},'first')

  // .to('.service_title.two, .image_area .img.two', {duration:1.5, opacity:0}, 'first')
  // .to('.explain_area.two', {duration:1.5, opacity:0}, 'first')
  

  .add('second')
  .to('.service_title.two, .image_area .img.two', {top:"-150px", duration:1.5, opacity:0, y:-150, },'second')
  .to('.explain_area.two', {duration:1.5, opacity:0, y:-150},'second')

  .add('three')
  .to('.service_title.three, .image_area .img.three', {duration:1.5, opacity:0, y:-150,  },'three')
  .to('.explain_area.three', {duration:1.5, opacity:0, y:-150},'three')

  .add('four')
  .to('.service_title.four, .image_area .img.four', {duration:1.5, opacity:0, y:-150},'four')
  .to('.explain_area.four', {duration:1.5, opacity:0, y:-150},'four')


 

 var secondArea = new ScrollMagic.Scene({
    triggerElement: ".two", // �곸뿭�쒖옉
    triggerHook: "0", // �곷떒 �꾩튂
    duration: "300%",  // �꾨떖�덉쓣��
  })
  .setPin(".two") // �섏씠吏�怨좎젙
  .setTween(secondArea)
  .addIndicators() 
  .addTo(controller);

  
});