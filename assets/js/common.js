bubbly({
  colorStart: '#ffffff',
  colorStop: '#ffffff',
  blur: 1,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
});

$(function(){
  $('.top-slide').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
  });
});
