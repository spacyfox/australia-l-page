import Swiper from 'swiper/bundle';

export default {
  init() {
    const galleryThumbs = new Swiper('.s-gallery__slider-gallery-thumbs', {
      spaceBetween: 10,
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
