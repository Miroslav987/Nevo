import figure from '@shared/icons/figure_one.svg'
import laptop_baytash from '@shared/imgs/laptop_baytash.webp'
import laptop_elite from '@shared/imgs/laptop_elite.webp'
import { StaticImageData } from 'next/image'

interface CardPreviewAboutUs {
    img:string
    text:string
}
interface CardPreviewProject {
    imgOne:StaticImageData
    imgTwo:StaticImageData
}

interface Hero {
    mainText:string
    cardPreviewAboutUs:CardPreviewAboutUs
    cardPreviewProject:CardPreviewProject
}


export const hero:Hero = {
    mainText:'NevoDevs - <span>создаём технологии</span> сегодня, что бы вы лидировали завтра',
    cardPreviewAboutUs:{
        img:figure,
        text:' Мы разрабатываем сайты, онлайн-магазины и автоматизируем процессы, чтобы минимизировать ручной труд и увеличить вашу прибыль. Технологии, которые работают на вас – сегодня и в будущем.'
    },
    cardPreviewProject:{
        imgOne:laptop_baytash,
        imgTwo:laptop_elite,

    }
}