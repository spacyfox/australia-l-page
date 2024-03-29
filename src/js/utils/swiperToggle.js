import Swiper from 'swiper/swiper-bundle.min';

export default function swiperToggle(initialized, element, options) {
  if (initialized) {
    if (!element.swiper) {
      return new Swiper(element, options);
    }
  } else {
    if (element.swiper) {
      element.swiper.destroy();
    }
  }
}
