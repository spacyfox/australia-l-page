import Swiper from 'swiper/bundle';

export default {
  init() {
    const mql = window.matchMedia('(max-width: 767px)');
    $('.s-reasons__slider').each((index, element) => {
      let sliderInstance = null;

      function init(element) {
        // eslint-disable-next-line no-new
        new Swiper(element);
      }
      if (mql.matches) {
        sliderInstance = init(element);
      }

      mql.addEventListener('change', (e) => {
        if (e.matches) {
          sliderInstance = init(element);
        } else if (sliderInstance) {
          sliderInstance.destroy();
        }
      });
    });
  },
};
