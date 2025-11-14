
interface CardPreviewAboutUs {
  img: string
  text: string
}
interface CardPreviewProject {
  imgOne: string
  imgTwo: string
}

interface Hero {
  mainText: string
  cardPreviewAboutUs: CardPreviewAboutUs
  cardPreviewProject: CardPreviewProject
}

export const hero: Hero = {
  mainText: 'NevoDevs - <span>создаём технологии</span> сегодня, что бы вы лидировали завтра',
  cardPreviewAboutUs: {
    img: 'figure_one',
    text: ' Мы разрабатываем сайты, онлайн-магазины и автоматизируем процессы, чтобы минимизировать ручной труд и увеличить вашу прибыль. Технологии, которые работают на вас – сегодня и в будущем.',
  },
  cardPreviewProject: {
    imgOne: 'laptop_baytash',
    imgTwo: 'laptop_elite',
  },
}
