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
    responsive: [{
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
      }
    }
    ]
  });
});



$(window).scroll(function(){
  var element = $('.top-img__wrapper'),
       scroll = $(window).scrollTop(),
       height = element.outerHeight();
  if ( scroll > height ) {
    $(".header").addClass('header-background');
  } else {
    $(".header").removeClass('header-background');
  }
});

$(function(){

  $('.header-list li').hover(function(){
    $(this).find('.menu-contents').stop().slideDown();

  }, function(){
    $(this).find('.menu-contents').stop().slideUp();

  });

});
