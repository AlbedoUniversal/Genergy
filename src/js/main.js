$(document).ready(function () {
  // Slick slider
  $('.stocks__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="slick-prev" src="../images/s6/arrow.png">',
    nextArrow: '<img class="slick-next" src="../images/s6/arrow.png">',
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img class="slick-prev" src="../images/s9/arrow.png">',
    nextArrow: '<img class="slick-next" src="../images/s9/arrow.png">',
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Parralax
  function Parallax(parent, children, smoothness) {
    let parallaxChildren = document.querySelectorAll(children);

    document.querySelector(parent).onmousemove = function (e) {
      let mY = e.clientY;
      let mX = e.clientX;

      Array.from(parallaxChildren).forEach(function (child, i) {
        if (child.classList.contains('no-parallax')) {
          return;
        }
        requestAnimationFrame(function () {
          let newY = Math.floor(mY * smoothness) * (i + 1);
          let newX = Math.floor(mX * smoothness) * (i + 1);

          child.style.transform = `translate3d(${newX}px, ${newY}px, 0px)`;
        });
      });
    };
  };

  Parallax('.details', '.details-item__picture img', 0.01);
  Parallax('.questions', '.questions-content__picture img', 0.01);

  // Packs List active item
  const packs = document.getElementsByClassName('packs-content__list-item');

  for (let i = 0; i < packs.length; i++) {
    packs[i].addEventListener('click', function () {

      if (this.classList.contains('active')) {
        return;
      } else {

        for (let j = 0; j < packs.length; j++) {
          packs[j].classList.remove('active', 'greyscale');
        }

        this.classList.add('active', 'greyscale');
      }
    });
  }

  // Packs Config details show
  const packsConfItems = document.getElementsByClassName('packs-content__configuration-pictures__item');

  for (let i = 0; i < packsConfItems.length; i++) {

    packsConfItems[i].addEventListener('click', function () {

      const detaiLink = this.dataset.detail;
      const activeTab = document.querySelector('.tab-pane.active');
      const detail = activeTab.querySelector(`[data-detail-show="${detaiLink}"]`);
      const packsDetailsInner = activeTab.getElementsByClassName('packs-content__configuration-pictures__orangeball-inner');

      activeTab.getElementsByClassName('packs-content__configuration-pictures__orangeball')[0].classList.remove('show');
      activeTab.getElementsByClassName('packs-content__configuration-pictures__orangeball')[0].classList.add('show');


      for (let j = 0; j < packsDetailsInner.length; j++) {
        packsDetailsInner[j].classList.remove('active');
      }

      detail.classList.add('active');

    });

  }

  // Scroll Gallery
  $(".mcs-horizontal-example").mCustomScrollbar({
    axis: "x",
    theme: "3d-dark",
    advanced: { autoExpandHorizontalScroll: true }
  });

});