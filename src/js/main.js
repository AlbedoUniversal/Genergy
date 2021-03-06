$(document).ready(function () {
  // Slick slider
  $(".stocks__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="slick-prev" src="../images/s6/arrow.png">',
    nextArrow: '<img class="slick-next" src="../images/s6/arrow.png">',
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $(".reviews-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img class="slick-prev" src="../images/s9/arrow.png">',
    nextArrow: '<img class="slick-next" src="../images/s9/arrow.png">',
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  // Parralax
  if (screen.width >= 991) {
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
    }

    Parallax('.details', '.details-item__picture img', 0.01);
    Parallax('.questions', '.questions-content__picture img', 0.01);
  }

  // Packs List active item
  const packs = document.getElementsByClassName("packs-content__list-item");
  const packsTabs = document.getElementsByClassName('packs-content__configuration');
  for (let i = 0; i < packs.length; i++) {
    packs[i].addEventListener('click', function () {

      const tabId = this.id.replace(/(-tab)/, '');
      const targetTab = document.getElementById(tabId);

      if (this.classList.contains('active')) {
        return;
      } else {

        for (let j = 0; j < packs.length; j++) {
          packs[j].classList.remove("active", "greyscale");
        }

        this.classList.add("active", "greyscale");

        for (let i = 0; i < packsTabs.length; i++) {
          packsTabs[i].classList.remove("active");
        }

        targetTab.classList.add("active");
      }
    });
  }

  // Packs Config details show
  const packsConfItems = document.getElementsByClassName(
    'packs-content__configuration-pictures__item'
  );

  for (let i = 0; i < packsConfItems.length; i++) {
    packsConfItems[i].addEventListener('click', function () {
      const detaiLink = this.dataset.detail;
      const activeTab = this.parentNode.parentNode.parentNode;
      const detail = activeTab.querySelector(
        `[data-detail-show="${detaiLink}"]`
      );
      const packsDetailsInner = activeTab.getElementsByClassName(
        'packs-content__configuration-pictures__orangeball-inner'
      );

      activeTab.getElementsByClassName('packs-content__configuration-pictures__orangeball')[0].classList.toggle('show');

      for (let j = 0; j < packsDetailsInner.length; j++) {
        packsDetailsInner[j].classList.remove("active");
      }

      detail.classList.add('active');

    });
  }

  const orangeBalls = document.getElementsByClassName('packs-content__configuration-pictures__orangeball');

  Array.from(orangeBalls).forEach((ball) => {
    ball.addEventListener('click', function () {
      this.classList.toggle('show');
    });
  });

  // Scroll Gallery
  $('.mcs-horizontal-example').mCustomScrollbar({
    axis: 'x',
    theme: '3d-dark',
    advanced: { autoExpandHorizontalScroll: true }
  });

  const scrollItems = document.querySelectorAll('.scroll-item');

  Array.from(scrollItems).forEach(function (item) {
    item.addEventListener('click', function () {
      // const reg = /"([^"]*)"/;
      const url = this.style.backgroundImage;

      document.getElementById('body').classList.add('active__modal');
      
      document.getElementById('modal').style.backgroundImage = url;
      document.getElementById('modal').style.visibility = 'visible';

      document.getElementById('popup').style.opacity = 1;
      // popup.style.transform = 'scale(1)';



      window.onclick = function () {
        if (event.target == popup) {
          document.getElementById('body').classList.remove('active__modal');
          popup.style.opacity = 0;
        }
      }
    });
  });

  document.getElementById('close').onclick = function () {
    if (event.target == this) {
      popup.style.opacity = 0;
      popup.style.visibility = 'visible';
      document.getElementById('body').classList.remove('active__modal');
    }
  };
});
