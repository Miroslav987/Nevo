import { Autoplay } from "swiper/modules";

export const settingOurTeamSwiper = {
    spaceBetween: 100,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    modules: [Autoplay],
    breakpoints: {
        320: {
            spaceBetween: 40,
        },
        576: {
            spaceBetween: 100,
        },
    }
};