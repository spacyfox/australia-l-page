import dispatcher from './dispatcher';

export default {
  init() {
    this.scrollByHash();
    this.handleEvents();
    this.handleDispatcher();
  },

  handleDispatcher() {
    dispatcher.subscribe((e) => {
      if (e.type === 'scrollTo:scroll') {
        this.scrollTo(e.selector, {
          offset: e.offset,
        });
      }
    });
  },

  handleEvents() {
    const self = this;

    $('.js-scroll-to').on('click', function (e) {
      e.preventDefault();
      const selector = $(this).attr('href');
      const speed = $(this).attr('data-speed');
      const offset = $(this).attr('data-offset');

      self.scrollTo(selector, {
        speed,
        offset,
      });
    });
  },

  scrollTo(selector, { speed = 800, offset = 0 } = {}) {
    const $target = $(selector);
    if (!$target.length) return;


    $([document.documentElement, document.body]).animate({
      scrollTop: $target.offset().top - offset,
    }, speed);
  },

  scrollByHash() {
    // eslint-disable-next-line prefer-destructuring
    const { hash } = window.location;

    if (hash.length) {
      try {
        this.scrollTo(hash);
      } catch (e) {
        console.warn(e.message);
      }
    }
  },
};
