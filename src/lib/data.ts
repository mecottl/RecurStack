export interface Card{
    id: string;
    title: string;
    author: string;
    description: string;
    img: string;
    href: string;
}

export const cssData: Card[]=[
    {
        id: '1',
        title: 'Lenguaje CSS',
        author: 'MANZ.DEV',
        description: 'Documentacion CSS interactiva',
        img: 'https://lenguajejs.com/assets/images/manzdev-logo-128.webp',
        href: 'https://lenguajecss.com/'
    },
    {
        id: '2',
        title: 'UI VERSE',
        author: 'Community',
        description: 'Diseños css de componentes',
        img: 'https://uiverse.io/assets/logo-png-BXFOQKfc.png',
        href: 'https://uiverse.io/'
    },
    {
        id: '3',
        title: 'Pigment',
        author: 'ShapeFactory',
        description: 'Paleta de colores, gradientes, etc.',
        img: 'https://pigment.shapefactory.co/static/images/ogimage.jpg',
        href: 'https://pigment.shapefactory.co/'
    },
    {
        id: '4',
        title: 'Bento Grids',
        author: 'Ivan Volti',
        description: 'Templates Bento Grids',
        img: 'https://bentogrids.com/images/og.png',
        href: 'https://bentogrids.com/'
    }
]

export const sqlData: Card[]=[
    {
        id: '1',
        title: 'Postgres Sandbox',
        author: 'Postgres',
        description: 'IA generadora de Bases de datos Postgres',
        img: 'https://tse4.mm.bing.net/th/id/OIP.R5cbGr7noYptDFPLEYZrpgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://database.build/'
    },
]

export const jsData: Card[]=[
    {
        id: '1',
        title: 'Aprende JavaScript',
        author: 'Midu Dev',
        description: 'Curso progresivo e interactivo para JavaScript',
        img: 'https://tse1.mm.bing.net/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://www.aprendejavascript.dev/?code=014ba690-ff0c-442d-89b2-e98b7832f6d7'
    },
    
]