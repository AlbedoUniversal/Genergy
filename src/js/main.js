$(document).ready(function () {
  $('.stocks__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: '<img class="slick-prev" src="../images/s6/arrow.png">',
      nextArrow: '<img class="slick-next" src="../images/s6/arrow.png">',
      dots: true
    });
  
    $('.reviews-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<img class="slick-prev" src="../images/s9/arrow.png">',
      nextArrow: '<img class="slick-next" src="../images/s9/arrow.png">',
      dots: true
    });
});
