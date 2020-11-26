import { mobile } from '../media';
import dispatcher from '../dispatcher';
import swiperToggle from '../../utils/swiperToggle';

export default {
  init() {
    function create(element) {
      swiperToggle(mobile(), element, {});
    }

    $('.s-unique__slider').each((index, element) => {
      create(element);

      dispatcher.subscribe(({ type, content, contentSelector }) => {
        if (type === 'resize:width') {
          create(element);
        }
      });
    });
  },
};
