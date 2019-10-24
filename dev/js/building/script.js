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
import Carousel from './modules/carousel';

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

  //if (qs('.js-slider')) {
  //  const carousel = new Carousel('.swiper-container');
  //}

  // resize and scroll
  resizeWatcher();
  eventsDispatcher();
});


let mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

let elem = document.querySelector('.cards');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.cards__item',
  columnWidth: 0
});
