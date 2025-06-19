import { StaticImageData } from "next/image";
import elite_laptop from  '@shared/imgs/laptop_elite_two.webp'

export interface CardProject {
    main_img:StaticImageData | null
    img_one:StaticImageData | null
    img_two:StaticImageData | null
    title:string
    description:string[]
}

export const listOurProject: CardProject[] = [
    {
        main_img:elite_laptop,
        img_one:null,
        img_two:null,
        title: 'Elite Academy',
        description:['Мы помогаем трансформировать систему планирования, организационные процессы, инфраструктуру, а также коммуникационные и материальные ресурсы.','Наша цель — сделать так, чтобы ваша компания уверенно росла и адаптировалась в цифровой среде.']
    },
    {
        main_img:null,
        img_one:null,
        img_two:null,
        title: 'Elite Academy',
        description:['Мы помогаем трансформировать систему планирования, организационные процессы, инфраструктуру, а также коммуникационные и материальные ресурсы.','Наша цель — сделать так, чтобы ваша компания уверенно росла и адаптировалась в цифровой среде.']
    },
    {
        main_img:null,
        img_one:null,
        img_two:null,
        title: 'Elite Academy',
        description:['Мы помогаем трансформировать систему планирования, организационные процессы, инфраструктуру, а также коммуникационные и материальные ресурсы.','Наша цель — сделать так, чтобы ваша компания уверенно росла и адаптировалась в цифровой среде.']
    },
]