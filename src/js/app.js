
import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';

import sitePreloader from './modules/sitePreloader';
import cssVars from './modules/cssVars';
import resize from './modules/resize';
import lazyload from './modules/lazyload';
import sliders from './modules/sliders';
import tabs from './modules/tabs';

documentReady(() => {
  sitePreloader.init();
  cssVars.init();
  resize.init();
  lazyload.init();
  sliders.init();
  tabs.init();
});

documentLoaded(() => {

});
