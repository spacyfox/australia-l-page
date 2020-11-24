import Swiper from 'swiper/bundle';

export default {
  init() {
    const mql = window.matchMedia('(max-width: 767px)');

    $('.s-reasons__slider').each((index, element) => {
      let sliderInstance = null;

      function init(element) {
        // eslint-disable-next-line no-new
        return new Swiper(element);
      }

      if (mql.matches) {
        sliderInstance = init(element);
        // @todo тут присваиваешь переменной значение, возвращаемое функцией,
        // @todo но функция ничего не возвращает, поэтому на строке 12 добавил return
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
