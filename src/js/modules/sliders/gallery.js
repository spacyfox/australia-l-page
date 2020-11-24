import Swiper from 'swiper/swiper-bundle.min';

export default {
  init() {
    $('.s-gallery__slider').each((index, element) => {
      const galleryThumbs = new Swiper('.s-gallery__slider-gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      const galleryTop = new Swiper('.s-gallery__slider-gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    });
  },
};
