import swiper from 'swiper/bundle';

export default {
  init() {
    const galleryThumbs = new swiper('.s-gallery__slider-gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    const galleryTop = new swiper('.s-gallery__slider-gallery-top', {
      spaceBetween: 10,
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
