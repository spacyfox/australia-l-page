import Swiper from 'swiper/swiper-bundle.min';
import { mobileMin, mobile } from './media';
import dispatcher from './dispatcher';

export default {
  init() {
    const elements = [...document.querySelectorAll('.s-reviews__slider')];
  },

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
      el: el.find('.swiper-pagination')[0],
      clickable: true,
      dynamicBullets: true,
    },
  });
});
};
