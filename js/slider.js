const arrowLeft = document.querySelector('.arrow-left');
const arrowRigt = document.querySelector('.arrow-right');
const burgersList = document.querySelector('.burgers__list')
const burgersItem = document.querySelector('.burgers__item');






// const step = burgersItem.getBoundingClientRect().width;
// const slidesInView = 1;
// const maxRight = (burgersList.children.length - slidesInView) * step;
// const minRight = 0;
// let currentRight = 0;
// burgersList.style.width = `${step}px`;

// arrowRigt.addEventListener("click", e => {
//   e.preventDefault();
//   if (currentRight < maxRight) {
//     currentRight += step;
//     burgersItem.style.right = `${currentRight}px`;
//   } else {
//     currentRight = 0;
//     burgersList.style.right = 0;
//   }
// });

// arrowLeft.addEventListener("click", e => {
//   e.preventDefault();
//   if (currentRight > minRight) {
//     currentRight -= step;
//     burgersItem.style.right = `${currentRight}px`;
//   } else {
//     currentRight = maxRight;
//     burgersList.style.right = maxRight + 'px';
//   }
// });




// $(document).ready(function(){
//   const owl = $(".owl-carousel");
//   owl.owlCarousel({
//     center: true,
//     items:1,
//     loop:true
//   });

// });

// $('.arrow-right').click(function() {
//   owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.arrow-left').click(function() {
//   // With optional speed parameter
//   // Parameters has to be in square bracket '[]'
//   owl.trigger('prev.owl.carousel');
// })
