const arrowLeft = document.querySelector(".arrow-left");
const arrowRigt = document.querySelector(".arrow-right");
const burgersList = document.querySelector(".burgers__list");
const burgersItem = document.querySelector(".burgers__item");

$(document).ready(function() {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 1000
  });
  $(".slider-button_next").click(function() {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".slider-button_prev").click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel");
  });
});
