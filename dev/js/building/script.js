import {
  resizeWatcher,
  elemVisCheck,
  qs,
  qsAll,
  eventsDispatcher,
} from './modules/helpers';
import Index from './modules/index';
import Popup from './modules/popup';
import Forms from './modules/forms';
// import Burger from './modules/burger';
// import Contacts from './modules/contacts';
// import Sticky from './modules/sticky';

document.addEventListener('DOMContentLoaded', () => {
  // const burger = new Burger();

  // animation checker
  if (qsAll('.h-anim').length) elemVisCheck();

  // popup initialization
  if (qs('[data-popup]')) { 
    window.popup = new Popup('[data-popup]');
  }

  // form waitier
  if (qs('form')) {
    const forms = new Forms();
  }

  // if (document.body.classList.contains('index')) {
  //   const index = new Index(30);
  //   index.preload();
  // }

  // if (document.querySelector('.js-contacts-map')) {
  //   const contacts = new Contacts('contacts-map');
  //   contacts.init();
  // }

  // if (document.querySelector('.js-sticky')) {
  //   Sticky(20, 0);
  // }

  // if (document.querySelectorAll('.js-shave').length) {
  //   document.querySelectorAll('.js-shave').forEach((sh) => {
  //     shave(sh, sh.getAttribute('data-height'));
  //   });
  // }}

  // resize and scroll
  resizeWatcher();
  eventsDispatcher();
});
