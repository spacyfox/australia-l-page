import Swiper from 'swiper/bundle';

export default {
  init() {
    // @todo сделай через цикл по блокам .s-gallery__slider
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
  },
};
