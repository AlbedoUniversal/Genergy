$(document).ready(function () {

  // Slick slider
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

  // Parralax
  function Parallax(parent, children, smoothness) {
    var parallaxChildren = document.querySelectorAll(children);

    document.querySelector(parent).onmousemove = function (e) {
      var mY = e.clientY;
      var mX = e.clientX;

      Array.from(parallaxChildren).forEach(function (child, i) {
        if (child.classList.contains('no-parallax')) {
          return;
        }
        requestAnimationFrame(function () {
          var newY = Math.floor(mY * smoothness) * (i + 1);
          var newX = Math.floor(mX * smoothness) * (i + 1);

          child.style.transform = 'translate3d(' + newX + 'px,' + newY + 'px,' + '0px)';
        });
      });
    };
  };

  Parallax('.details', '.details-item__picture img', 0.01);
  Parallax('.questions', '.questions-content__picture img', 0.01);

  // Packs List active item
  var packs = document.getElementsByClassName('packs-content__list-item');

  for (var i = 0; i < packs.length; i++) {
    packs[i].addEventListener('click', function () {

      if (this.classList.contains('active')) {
        return;
      } else {
        
        for (var j = 0; j < packs.length; j++) {
          packs[j].classList.remove('active', 'greyscale');
        }
  
        this.classList.add('active', 'greyscale');
      }
    });
  }

  // Scroll Gallery
  $(".mcs-horizontal-example").mCustomScrollbar({
    axis: "x",
    theme: "3d-dark",
    advanced: { autoExpandHorizontalScroll: true },
    scrollEasing: 'linear'
  });

});

