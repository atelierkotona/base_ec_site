var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
});