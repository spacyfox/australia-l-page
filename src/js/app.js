import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import sitePreloader from './modules/sitePreloader';
import cssVars from './modules/cssVars';
import resize from './modules/resize';
import lazyload from './modules/lazyload';
import sliders from './modules/sliders';
import tabs from './modules/tabs';
import scrollTo from './modules/scrollTo';
import popup from './modules/popup';

documentReady(() => {
  sitePreloader.init();
  cssVars.init();
  resize.init();
  lazyload.init();
  sliders.init();
  tabs.init();
  scrollTo.init();
  popup.init();
});

documentLoaded(() => {

});
