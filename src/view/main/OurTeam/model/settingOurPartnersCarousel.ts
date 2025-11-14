import { Autoplay } from 'swiper/modules'

export const settingOurPartnersCarousel = {
  spaceBetween: 100,
  slidesPerView: 5,
  allowTouchMove: false,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    576: {
      slidesPerView: 5,
    },
  },
}
