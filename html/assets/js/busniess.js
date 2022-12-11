$(function(){
  var scrollBody = document.querySelector(".service_list");
  var parents = document.querySelector(".fixed_scrollmotion");

  var scrollHeight;
  var sectionOffsetTop;
  var sectionScrolTop;
  var scrollRealHeight;
  var winScrollTop;
  var scrollPerecnt;
  var percent;

  var contentList = parents.children;

  function changeOverlap() {
    actionScroll ()
  }

  function actionScroll () {
    scrollHeight = scrollBody.offsetHeight;
    winScrollTop = window.pageYOffset;
    sectionOffsetTop = scrollBody.getBoundingClientRect().top + window.pageYOffset;
    scrollRealHeight = (scrollHeight - window.innerHeight);
    sectionScrolTop = winScrollTop - sectionOffsetTop;
    scrollPerecnt =  sectionScrolTop / scrollRealHeight;
    percent = scrollPerecnt * 100 ;
    

    if(percent >= 0 ){
      contentList[0].classList.add('on');
      contentList[1].classList.remove('on');
      contentList[2].classList.remove('on');
      contentList[3].classList.remove('on');
    }

    if(percent >= 25){
      contentList[0].classList.remove('on');
      contentList[1].classList.add('on');
      contentList[2].classList.remove('on');
      contentList[3].classList.remove('on');
    }

    if(percent >= 50){
      contentList[0].classList.remove('on');
      contentList[1].classList.remove('on');
      contentList[2].classList.add('on');
      contentList[3].classList.remove('on');

    if(percent >= 75){
      contentList[0].classList.remove('on');
      contentList[1].classList.remove('on');
      contentList[2].classList.remove('on');
      contentList[3].classList.add('on');
    }
  };
}

function init() {
  changeOverlap();
  bindEvent();
}

function bindEvent(){
  window.addEventListener('scroll', function() {
    changeOverlap();
  });
};
  
  init();
});
