import { qs } from './helpers';

export default class Carousel {
  constructor(galleryClass) {
    this.galleryClass = galleryClass;
    this.galleryEl = qs(`${this.galleryClass} .swiper-slide`);

    this.init();
  }

  init() {
    const galleryCarousel = new Swiper(this.galleryClass, {
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

}