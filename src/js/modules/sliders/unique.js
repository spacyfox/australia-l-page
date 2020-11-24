import Swiper from 'swiper/swiper-bundle.min';

export default {
  init() {
    const mql = window.matchMedia('(max-width: 767px)');
    $('.s-unique__slider').each((index, element) => {
      let sliderInstance = null;

      function init(element) {
        // eslint-disable-next-line no-new
        new Swiper(element);
      }
      if (mql.matches) {
        sliderInstance = init(element);
      }

      mql.addListener((e) => {
        if (e.matches) {
          sliderInstance = init(element);
        } else if (sliderInstance) {
          sliderInstance.destroy();
        }
      });
    });
  },
};
