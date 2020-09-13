$(function(){

  $(".featured__stars").rateYo({
    rating: 4.5,
    starWidth: "13px",
    readOnly: true
  });

  $('.featured__inner').slick({
    arrows: true,
    fade: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.png" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.png" alt="next arrow"></button>',
  })

  var mixer = mixitup('.products__inner');

});