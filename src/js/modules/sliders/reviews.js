import Swiper from 'swiper/bundle';

export default {
  init() {
    $('.s-reviews__slider').each((index, element) => {
      const el = $(element);
      // eslint-disable-next-line no-unused-vars
      const slider = new Swiper(element, {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      });
    });
  },
};
