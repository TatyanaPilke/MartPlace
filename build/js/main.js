$(function () {

  $(".featured__stars").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing: "3px",
    readOnly: true
  });

  $(".product-card__stars").rateYo({
    rating: 4.5,
    starWidth: "13px",
    spacing: "3px",
    readOnly: true
  });

  $('.featured__inner').slick({
    prevArrow: '<button type="button" class="slick-arrow featured__arrow featured__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow featured__arrow featured__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-wrap',
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      }
    }, ]
  });


  $('.followers__box').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-arrow followers__arrow followers__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow followers__arrow followers__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-followers',
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      }
    }, ]
  })

  $('.feedback__box').slick({
    variableWidth: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="feedback__arrow feedback__arrow--prev"></button><span class="lnr lnr-chevron-left feedback__btn feedback__btn--prev"></span></button>',
    nextArrow: '<button class="feedback__arrow feedback__arrow--next"></button><span class="lnr lnr-chevron-right feedback__btn feedback__btn--next"></span></button>',
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      }
    }, ]
  })

  document.querySelectorAll('.js-simplebar').forEach(el => {
    new SimpleBar(el);
  });

  $('.header__btn').on('click', function () {
    $('.menu').slideToggle();
  });

  $('.header__user').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  $('.categories').on('click', function () {
    $('.filter-products__list').slideToggle();
  });

  $('.filter').on('click', function () {
    $('.filter-products__radio').slideToggle();
  });

  $('.range').on('click', function () {
    $('.filter-products__radio-range').slideToggle();
  });

  $('.breadcrumbs__btn--list').on('click', function () {
    $('.filter-products__card').addClass('list');
  });

  $('.breadcrumbs__btn--grid').on('click', function () {
    $('.filter-products__card').removeClass('list');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 70,
    to: 300,
    prefix: "$"
  });

  document.querySelector('.header__btn').onclick = function () {
    this.classList.toggle('header__active');
  }

  var mixer = mixitup('.new-products__inner');

});