import { verifyIE } from './auxiliar';
import { documentReady, urlHashChange } from './utils';

import UrlHandler from './UrlHandler';

import { loadAndPlay, setEditMode } from './actions';

const startApplication = () => {
  urlHashChange(() => {
    // TODO Handle URL
    const { key, mode } = UrlHandler.getParams();
    if (key) {
      if (!mode) {
        loadAndPlay(key);
        return;
      }
      console.log(mode);
    }
    setEditMode();
  });


  documentReady(() => {
    verifyIE();
    window.dispatchEvent(new Event('hashchange'));
  });
};

export default startApplication;