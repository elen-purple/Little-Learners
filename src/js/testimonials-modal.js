import Swiper from 'swiper/bundle';

const swiper = new Swiper('.testimonials__container', {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.testimonials__btn--next',
    prevEl: '.testimonials__btn--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1312: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1628: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
