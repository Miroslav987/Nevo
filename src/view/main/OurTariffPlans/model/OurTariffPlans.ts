export interface CardTariffType {
    hasHorizontal?: boolean;
    hasTariffBlack?: boolean;
    title: string;
    tag: string
    subtitle: string
    price: number;
    features: string[];
}

export const listTariff:CardTariffType[] = [
    {   
        title: "Базовый",
        tag: "Малый бизнес",
        subtitle: "<span> Идеально подходит</span> для малого бизнеса и стартапов",
        price: 18000,
        features: [
            "Бот отвечает на частые вопросы",
            "Принимает имя, номер и заявку",
            "Последующая тех. поддержка ",
            "Настройка под ваш бизнес"
        ],
    },
    {   
        hasTariffBlack:true,
        title: "Бизнес",
        tag: "Средний/малый бизнес",
        subtitle: "<span> Отлично подходит </span> для масштабирования бизнеса и предприятий",
        price: 25000,
        features: [
            "Всё из Базового тарифа",
            "Удобная систематизация через Google Таблицу",
            "Последующая тех. поддержка",
            "Интеграция с таблицей, из которой бот вытягивает <br/> <br/> • Название <br/>• Цена <br/>• Описание <br/>• Фото"
        ],
    },
    {   
        title: "Премиум",
        tag: "Средний/Крупный бизнес",
        subtitle: "<span> Идеально подходит </span> для малого бизнеса и стартапов",
        price: 34000,
        features: [
            "Всё из Базового",
            "Принимает имя, номер и заявку",
            "Последующая тех. поддержка ",
            "Настройка под ваш бизнес ",
        ],
    }
] 