import { StaticImageData } from "next/image"
import landing from '@shared/icons/landing.svg'
import store from '@shared/icons/store.svg'
import corporate from '@shared/icons/corporate.svg'

interface AboutUs {
    content_title: string
    sub_title: string
    stat_descp: string
    stat_card: {
        value: string,
        label: string,

    },
    result_card: {
        value: string,
        label: string,

    },

    // MissionBlock
    mission_main_titles: string[],
    mission_info_textes: string[],

    //TechStackBlock
    tools_front: string,
    tools_back: string
    techCards: TechCard[]
}

export interface TechCard {
    title: string
    img: StaticImageData
}


export const aboutUs: AboutUs = {
    // HeaderBlock
    content_title: 'Технологии, которые превращают <span>бизнес в бренд </span> ',
    sub_title: 'Мы разрабатываем мощные веб-продукты,',
    stat_descp: 'Мы создаем цифровые решения, которые делают бизнес умнее, процессы — эффективнее, а клиентов — ближе. От разработки сайтов и онлайн-магазинов до автоматизации и оптимизации — мы превращаем технологии в ваш конкурентный успех.',
    stat_card: {
        value: '15%',
        label: 'Сокращение ручного труда',

    },
    result_card: {
        value: 'На 30%',
        label: 'Увеличили конверцию и прибыль компаниис которыми мы работали',

    },

    // MissionBlock
    mission_main_titles: ['Создаём.', 'Развиваем.', 'Поддерживаем.', 'Воплощаем.',],
    mission_info_textes: ['Мы помогаем трансформировать систему планирования, организационные процессы, инфраструктуру, а также коммуникационные и материальные ресурсы.',
        'Наша цель — сделать так, чтобы ваша компания уверенно росла и адаптировалась в цифровой среде.',],

    //TechStackBlock
    tools_front: 'php / Node.js / Html5 / React / Sketch / Figma / Bootstrap / Css3',
    tools_back: 'php / Node.js / Html5 / React / Sketch / Figma / Bootstrap / Css3',
    techCards: [
        {
            title: 'Одностроничные сайты',
            img: landing
        },
        {
            title: 'Интернет Магазины',
            img: store
        },
        {
            title: 'Корпоративные сайты',
            img: corporate
        },
    ]
}