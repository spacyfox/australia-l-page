import Swiper from 'swiper/swiper-bundle.min';

export default {
  init() {
    $('.s-gallery__slider').each((index, element) => {
      const el = $(element);
      const galleryThumbs = new Swiper(el.find('.s-gallery__slider-gallery-thumbs')[0], {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      // eslint-disable-next-line no-unused-vars
      const galleryTop = new Swiper(el.find('.s-gallery__slider-gallery-top')[0], {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
          // eslint-disable-next-line no-undef
          nextEl: el.find('.swiper-button-next')[0],
          // eslint-disable-next-line no-undef
          prevEl: el.find('.swiper-button-prev')[0],
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    });
  },
};
