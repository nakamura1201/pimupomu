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
    centerMode: true,
    centerPadding: '25%',
  });
});
