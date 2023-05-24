$(document).ready(function($) {
    $('.card-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});




<!-- js -->
<script>
  const imgList = document.getElementById("testimonalList");
  const scrollRight = document.getElementById("testimonial_scroll_right");
  const scrollLeft = document.getElementById("testimonial_scroll_left");

  if (scrollLeft !== null || scrollRight !== null) {
    scrollRight.addEventListener("click", () => {
      imgList.scrollBy(500, 0);
    });

    scrollLeft.addEventListener("click", () => {
      imgList.scrollBy(-500, 0);
    });
    // testimonial card scroll tugadi

    // counter raqam sanash boshlandi
    $(".counter").counterUp({ delay: 5, time: 1000 });
    // counter raqam sanasg tugadi
  }

  // testimonial card scroll boshlandi
  const cards = document.getElementById("cards");
  const shop_in_prev = document.getElementById("shop_in_prev");
  const shop_in_next = document.getElementById("shop_in_next");

  if (shop_in_prev !== null || shop_in_next !== null) {
    shop_in_next.addEventListener("click", () => {
      cards.scrollBy(500, 0);
    });

    shop_in_prev.addEventListener("click", () => {
      cards.scrollBy(-500, 0);
    });
    // testimonial card scroll tugadi
  }
</script>