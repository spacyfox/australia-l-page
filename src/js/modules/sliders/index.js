import reasons from './reasons';
import reviews from './reviews';
import gallery from './gallery';
import unique from './unique';

export default {
  init() {
    reasons.init();
    reviews.init();
    gallery.init();
    unique.init();
  },
};
