import dispatcher from './dispatcher';
import throttle from '../utils/throttle';

export default {
  size: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  init() {
    const self = this;

    window.addEventListener('resize', throttle(300, false, () => {
      self.handleResize();
    }), false);

    window.addEventListener('orientationchange', throttle(300, false, () => {
      self.handleResize();
    }), false);
  },
  handleResize() {
    /* eslint-disable prefer-destructuring */
    const width = window.innerWidth;
    const height = window.innerHeight;
    /* eslint-enable prefer-destructuring */

    const widthChanged = width !== this.size.width;
    const heightChanged = height !== this.size.height;

    if (widthChanged) {
      dispatcher.dispatch({
        type: 'resize:width',
      });
    }

    if (heightChanged) {
      dispatcher.dispatch({
        type: 'resize:height',
      });
    }

    if (widthChanged && heightChanged) {
      dispatcher.dispatch({
        type: 'resize:both',
      });
    }

    dispatcher.dispatch({
      type: 'resize:default',
    });

    this.size = {
      width,
      height,
    };
  },
};
