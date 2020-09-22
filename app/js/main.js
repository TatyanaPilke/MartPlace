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
    arrows: true,
    fade: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.png" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.png" alt="next arrow"></button>',
  })

  $('.followers__box').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
    // prevArrow: '<button class="followers-arrow followers-prev"><img src="images/icons/chevron-left.png" alt="prev arrow"></button>',
    // nextArrow: '<button class="followers-arrow follorwers-next"><img src="images/icons/chevron-right.png" alt="next arrow"></button>',
  })

  var mixer = mixitup('.new-products__inner');

});