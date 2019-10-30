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

if (qs('.swiper-container')) {
  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
}

if (qs('.cards')) {
  let elem = qs('.cards');
  let msnry = new Masonry(elem, {
    // options
    itemSelector: '.cards__item',
    columnWidth: 0
  });
}

// Фильтр

{
  filterSelection('all')
  function filterSelection(c) {
    let filterItem = document.getElementsByClassName('filterDiv');
    // Add the 'show' class (display:block) to the filtered elements,
    // and remove the 'show' class from the elements that are not selected
    for (let i = 0; i < filterItem.length; i++) {
      addClass(filterItem[i], 'cards__item_inactive');
      if (filterItem[i].className.indexOf(c) > -1) removeClass(filterItem[i], 'cards__item_inactive');
    }
  }

  // Show filtered elements
  function addClass(element, name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += ' ' + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function removeClass(element, name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(' ');
  }

  // Add active class to the current control button (highlight it)
  let btnContainer = document.getElementById('breadcrumbs');
  let btns = btnContainer.getElementsByClassName('breadcrumbs__href');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      let current = document.getElementsByClassName('breadcrumbs__href_active');
      current[0].className = current[0].className.replace(' breadcrumbs__href_active', '');
      this.className += ' breadcrumbs__href_active';
    });
  }
}
