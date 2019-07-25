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

  var movementConstant = .005;
  var currentX = '';
  var currentY = '';

  $('.details').mousemove(function (e) {
    if (currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;

    if (currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;

    $('.details .details-item__picture img').each(function (i, el) {
      requestAnimationFrame(function () {
        var movement = (i + 1) * (xdiff * movementConstant);
        var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left + movement;
        var newY = $(el).position().top + movementy;

        $(el).css('left', newX + 'px');
        $(el).css('top', newY + 'px');

      });

    });
  });

  $('.questions').mousemove(function (e) {
    if (currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;

    if (currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;

    $('.questions .questions-content__picture img').each(function (i, el) {

      if (el.classList.contains('no-parallax')) {
        return;
      } else {
        requestAnimationFrame(function () {
          var movement = (i + 1) * (xdiff * movementConstant);
          var movementy = (i + 1) * (ydiff * movementConstant);
          var newX = $(el).position().left + movement;
          var newY = $(el).position().top + movementy;
  
          $(el).css('left', newX + 'px');
          $(el).css('top', newY + 'px');
  
        });
      }
    });
  });
});
