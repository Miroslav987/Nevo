import { Autoplay } from "swiper/modules";

  export const settingOurPartnersCarousel = {
    spaceBetween: 50,
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
      },
      576: {
        slidesPerView: 5,
      },
    }
  }