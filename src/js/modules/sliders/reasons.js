import swiper from 'swiper/bundle';

export default {
  init() {
    const reasonsSlider = document.querySelectorAll('.s-reasons__slider');

    function init(el) {
      return new swiper('.s-reasons__slider');
    }

    Array.prototype.forEach.call(reasonsSlider, (el, i)=> {
      let sliderInstance = null;
      const mql = window.matchMedia('(max-width: 767px)');

      if (mql.matches) {
        sliderInstance = init(el);
      }

      mql.addEventListener('change', (e) => {
        if (e.matches) {
          sliderInstance = init(el);
        } else if (sliderInstance) {
          sliderInstance.destroy();
        }
      });
    });
  },
};
