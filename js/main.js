
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 12,

  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});