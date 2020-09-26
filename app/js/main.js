$(function(){

  $(".featured-card__stars").rateYo({
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
    prevArrow: '<button type="button" class="featured-arrow featured-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="featured-arrow featured-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-wrap'
  })


  $('.followers__box').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="featured-arrow featured-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="featured-arrow featured-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-followers'
  })
  
  $('.feedback__box').slick({
    variableWidth: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="feedback-arrow feedback-arrow--prev"></button><span class="lnr lnr-chevron-left feedback-btn feedback-btn--prev"></span></button>',
    nextArrow: '<button class="feedback-arrow feedback-arrow--next"></button><span class="lnr lnr-chevron-right feedback-btn feedback-btn--next"></span></button>',
  })


  var mixer = mixitup('.new-products__inner');

});