const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  spaceBetween: 2,

  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});