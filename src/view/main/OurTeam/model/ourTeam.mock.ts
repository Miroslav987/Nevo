import { StaticImageData } from 'next/image'

import photo from '@shared/imgs/team.webp'

interface OurTeam {
  name: string
  position: string
  quote: string
  img: StaticImageData
}

export const ourTeam: OurTeam[] = [
  {
    name: 'Kasymov Ablai1',
    position: 'CEO NevoDevs',
    quote:
      '“Мы создаем цифровые решения, которые делают бизнес умнее, процессы — эффективнее, а клиентов — ближе. От разработки сайтов и онлайн-магазинов до автоматизации и оптимизации — мы превращаем технологии в ваш конкурентный успех.”',
    img: photo,
  },
  {
    name: 'Kasymov Ablai2',
    position: 'CEO NevoDevs',
    quote:
      '“Мы создаем цифровые решения, которые делают бизнес умнее, процессы — эффективнее, а клиентов — ближе. От разработки сайтов и онлайн-магазинов до автоматизации и оптимизации — мы превращаем технологии в ваш конкурентный успех.”',
    img: photo,
  },
  {
    name: 'Kasymov Ablai3',
    position: 'CEO NevoDevs',
    quote:
      '“Мы создаем цифровые решения, которые делают бизнес умнее, процессы — эффективнее, а клиентов — ближе. От разработки сайтов и онлайн-магазинов до автоматизации и оптимизации — мы превращаем технологии в ваш конкурентный успех.”',
    img: photo,
  },
]
