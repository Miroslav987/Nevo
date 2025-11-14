
export interface CardServiceType {
    hasFullSize?: boolean
    title:string
    description: string
    image: string 
}

export const listServices:CardServiceType[] = [
    {    
        hasFullSize:true,
        title:'ИИ-Боты',
        description:'Regular updates, performance boosts, and fixes to keep your system running smoothly.',
        image:'card_sevice_1'
    },
        {
        title:'Разработка индивидуальных веб-сайтов',
        description:'Web solutions designed to enhance user experience and meet specific business goals.',
        image:'card_sevice_2'
    },
        {
        title:'Разработка CRM платформ ',
        description:'We create seamless, user-friendly mobile applications for iOS and Android.',
        image:'about_main'
    },
]