$(function(){

  $(".featured__stars").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing   : "3px",
    readOnly: true
  });

  $(".product-card__stars").rateYo({
    rating: 4.5,
    starWidth: "13px",
    spacing   : "3px",
    readOnly: true
  });

  $('.featured__inner').slick({
    prevArrow: '<button type="button" class="slick-arrow featured__arrow featured__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow featured__arrow featured__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-wrap'
  })


  $('.followers__box').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-arrow followers__arrow followers__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow followers__arrow followers__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-followers'
  })
  
  $('.feedback__box').slick({
    variableWidth: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="feedback__arrow feedback__arrow--prev"></button><span class="lnr lnr-chevron-left feedback__btn feedback__btn--prev"></span></button>',
    nextArrow: '<button class="feedback__arrow feedback__arrow--next"></button><span class="lnr lnr-chevron-right feedback__btn feedback__btn--next"></span></button>',
  })

  new SimpleBar(document.getElementById('my-simplebar'));

  var mixer = mixitup('.new-products__inner');

});