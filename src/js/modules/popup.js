import 'magnific-popup';
import dispatcher from './dispatcher';
import getUrlParams from '../utils/getUrlParams';
import getScreenSize from '../utils/getScreenSize';
import throttle from '../utils/throttle';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const popups = {
  currentPopup: null,

  options: {
    type: 'iframe',
    preloader: false,

    callbacks: {
      beforeOpen() {},

      open() {
        const content = this.content[0];
        // eslint-disable-next-line prefer-destructuring
        const mfpContainer = content.parentNode.parentNode;

        const input = this.content[0].querySelector('input');
        if (!input) {
          disableBodyScroll(mfpContainer); // заблочить скролл всего кроме mfp-container
        }

        document.documentElement.classList.add('_is-popup-open');

        const action = {
          type: 'popup:opened',
          popupContent: content,
        };
        if (this.currItem.el) {
          action.triggerElement = this.currItem.el[0];
        }
        dispatcher.dispatch(action);

        dispatcher.dispatch({
          type: 'sidebar:close',
        });

        popups.currentPopup = content;
      },

      beforeClose() {
        const input = this.content[0].querySelector('input');

        if (!input) {
          // eslint-disable-next-line prefer-destructuring
          const mfpContainer = this.content[0].parentNode.parentNode;
          enableBodyScroll(mfpContainer);
        }
      },

      close() {
        document.documentElement.classList.remove('_is-popup-open');
        const action = {
          type: 'popup:closed',
          popupContent: this.content[0],
        };
        dispatcher.dispatch(action);

        popups.currentPopup = null;
      },
    },
  },

  init() {
    $('.js-popup-open').magnificPopup(this.options);

    this.handleDispatcher();
    this.handleEvents();
    this.openByUrl();
  },

  handleDispatcher() {
    dispatcher.subscribe(({ type, content, contentSelector }) => {
      if (type === 'popup:open') {
        const popupContent = contentSelector ? $(contentSelector) : content;
        this.open(popupContent);
      }
      if (type === 'popup:close') {
        this.close();
      }
    });
  },

  handleEvents() {
    $(document).on('click', '.js-popup-close', () => {
      this.close();
    });

    const handleResize = () => {
      if (!this.currentPopup) return;

      setTimeout(() => {
        const { height: screenHeight } = getScreenSize();
        const { top: contentTop, height: contentHeight } = this.currentPopup.getBoundingClientRect();
        const heightDifference = screenHeight - contentHeight;

        if (heightDifference < 0) {
          // если высота контента больше высоты экрана - просто проскроллить сайт до попапа
          this.currentPopup.scrollIntoView();
        } else {
          const position = (window.pageYOffset + contentTop) - (heightDifference / 2);
          window.scrollTo(0, position);
        }
      }, 500);
    };

    // при смене ориентации экрана/ресайзе с отключенным скроллом сайта (disableBodyScroll) центрирует попап по центру
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('resize', throttle(500, handleResize));
  },

  /**
   * ?popup=popup-registration
   */
  openByUrl() {
    const { popup: popupId } = getUrlParams();
    const popupEl = document.getElementById(`${ popupId }`);
    if (popupEl) {
      try {
        this.open(`#${ popupId }`);
      } catch (e) {
        console.warn(e.message);
      }
    }
  },

  open(content) {
    $.magnificPopup.open({
      ...this.options,
      items: {
        src: $(content),
      },
    });
  },

  close() {
    $.magnificPopup.close();
  },
};

export default popups;
