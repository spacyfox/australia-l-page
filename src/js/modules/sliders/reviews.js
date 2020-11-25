import Swiper from 'swiper/swiper-bundle.min';

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
        speed: 500,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
          // @todo пагинация именно внутри текущего контейнера, т.е. должно быть: el: el.find('.swiper-pagination')[0],
          // так же сделать в gallery.js для строк 6, 15, 19, 20
          clickable: true,
          dynamicBullets: true,
        },
      });
    });
  },
};
