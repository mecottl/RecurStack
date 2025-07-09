export interface Card{
    id: string;
    title: string;
    author: string;
    description: string;
    img: string;
    href: string;
}
export const htmlData: Card[] = [
    {
        id: '1',
        title: 'HTML Reference',
        author: 'HTMLReference.io',
        description: 'Guía visual e interactiva de HTML',
        img: 'https://htmlreference.io/images/logo.png',
        href: 'https://htmlreference.io/'
    },
    {
        id: '2',
        title: 'Can I use',
        author: 'Fyrd',
        description: 'Compatibilidad de HTML5 y otras APIs en navegadores',
        img: 'https://caniuse.com/img/favicon-128.png',
        href: 'https://caniuse.com/'
    },
    {
        id: '3',
        title: 'Frontend Checklist',
        author: 'David Dias',
        description: 'Lista de verificación para buenas prácticas HTML',
        img: 'https://frontendchecklist.io/img/logo.png',
        href: 'https://frontendchecklist.io/'
    }
]

export const gitData: Card[] = [
    {
        id: '1',
        title: 'Oh My Git!',
        author: 'blinry',
        description: 'Juego interactivo para aprender Git',
        img: 'https://ohmygit.org/favicon.ico',
        href: 'https://ohmygit.org/'
    },
    {
        id: '2',
        title: 'Learn Git Branching',
        author: 'Peter Cottle',
        description: 'Simulador interactivo para aprender Git y branching',
        img: 'https://learngitbranching.js.org/static/favicon.ico',
        href: 'https://learngitbranching.js.org/'
    },
    {
        id: '3',
        title: 'Git Explorer',
        author: 'gitexplorer.com',
        description: 'Encuentra el comando Git ideal rápidamente',
        img: 'https://gitexplorer.com/favicon.png',
        href: 'https://gitexplorer.com/'
    }
]

export const cssData: Card[]=[
    
    {
        id: '1',
        title: 'UI VERSE',
        author: 'Community',
        description: 'Diseños css de componentes',
        img: 'https://uiverse.io/assets/logo-png-BXFOQKfc.png',
        href: 'https://uiverse.io/'
    },

    {
        id: '2',
        title: 'Bento Grids',
        author: 'Ivan Volti',
        description: 'Templates Bento Grids',
        img: 'https://bentogrids.com/images/og.png',
        href: 'https://bentogrids.com/'
    },
    {
    id: '3',
    title: 'Animista',
    author: 'Ana Travas',
    description: 'Colección de animaciones CSS listas para usar',
    img: 'https://animista.net/share/animista-logo.png',
    href: 'https://animista.net/'
},
{
    id: '4',
    title: 'Neumorphism.io',
    author: 'Adam Giebl',
    description: 'Generador de estilos Neumorphism en CSS',
    img: 'https://neumorphism.io/img/logo.svg',
    href: 'https://neumorphism.io/'
},
{
    id: '5',
    title: 'Glassmorphism Generator',
    author: 'Hype4',
    description: 'Generador de efectos glassmorphism en CSS',
    img: 'https://hype4.academy/tools/glassmorphism-generator/logo.png',
    href: 'https://hype4.academy/tools/glassmorphism-generator'
},
{
    id: '6',
    title: 'Color Space',
    author: '',
    description: 'Generador de paletas desde un solo color',
    img: 'https://hype4.academy/tools/glassmorphism-generator/logo.png',
    href: 'https://mycolor.space/'
},


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
    {
        id: '2',
        title: 'ChartDB',
        author: '',
        description: 'Creadora de diagramas de bases de datos',
        img: 'https://framerusercontent.com/images/nVPiOvGRZLelvCszYHI7BIBhCgc.png?scale-down-to=512',
        href: 'https://chartdb.io/'
    
    },
    {
    id: '3',
    title: 'SQLBolt',
    author: 'SQLBolt',
    description: 'Aprende SQL con lecciones interactivas',
    img: 'https://www.sqlbolt.com/img/logo.png',
    href: 'https://sqlbolt.com/'
},
{
    id: '4',
    title: 'DBDiagram.io',
    author: 'Holistics',
    description: 'Crea diagramas ER visualmente',
    img: 'https://dbdiagram.io/images/logo.png',
    href: 'https://dbdiagram.io/'
}

]

export const jsData: Card[]=[
    {
        id: '1',
        title: 'Aprende JavaScript',
        author: 'Midu Dev',
        description: 'Curso progresivo e interactivo para JavaScript',
        img: 'https://framerusercontent.com/images/nVPiOvGRZLelvCszYHI7BIBhCgc.png?scale-down-to=512 512w,https://framerusercontent.com/images/nVPiOvGRZLelvCszYHI7BIBhCgc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nVPiOvGRZLelvCszYHI7BIBhCgc.p',
        href: 'https://www.aprendejavascript.dev/?code=014ba690-ff0c-442d-89b2-e98b7832f6d7'
    },
    {
    id: '2',
    title: 'JavaScript.info',
    author: 'Ilya Kantor',
    description: 'Documentación y tutorial de JS moderno',
    img: 'https://javascript.info/img/favicon/apple-touch-icon.png',
    href: 'https://javascript.info/'
},
{
    id: '3',
    title: '30 Seconds of Code',
    author: 'Community',
    description: 'Snippets útiles de JavaScript y más',
    img: 'https://www.30secondsofcode.org/icons/icon-96x96.png',
    href: 'https://www.30secondsofcode.org'
}
]

export const deployData: Card[]=[
        {
        id: '1',
        title: 'Netlify Drop',
        author: 'Netlify',
        description: 'Hostinger gratuito para paginas estáticas',
        img: 'https://tse1.mm.bing.net/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://app.netlify.com/'
    },
    {
    id: '2',
    title: 'Vercel',
    author: 'Vercel Inc.',
    description: 'Deploy sencillo de proyectos front-end y full stack',
    img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
    href: 'https://vercel.com/'
},
{
    id: '3',
    title: 'Render',
    author: 'Render Inc.',
    description: 'Backend y frontend hosting gratuito y fácil',
    img: 'https://render.com/images/favicon.png',
    href: 'https://render.com/'
}

]

export const documentationData: Card[]=[
    {
        id: '1',
        title: 'Lenguaje JS',
        author: 'MANZ.DEV',
        description: 'Documentacion de tecnologias iniciando con un roadmap',
        img: 'https://lenguajejs.com/assets/images/manzdev-logo-128.webp',
        href: 'https://lenguajejs.com/roadmap/'
    },
    {
    id: '2',
    title: 'DevDocs',
    author: 'Thibaut Courouble',
    description: 'Documentación unificada para múltiples tecnologías',
    img: 'https://devdocs.io/images/icon.png',
    href: 'https://devdocs.io'
},
{
    id: '3',
    title: 'MDN Web Docs',
    author: 'Mozilla',
    description: 'Documentación oficial para HTML, CSS y JS',
    img: 'https://developer.mozilla.org/favicon.ico',
    href: 'https://developer.mozilla.org/'
}

]

export const designData: Card[] = [
    {
        id: '1',
        title: 'Coolors',
        author: 'Coolors.co',
        description: 'Generador de paletas de colores modernas',
        img: 'https://coolors.co/assets/img/coolors-logo.svg',
        href: 'https://coolors.co/'
    },
    {
        id: '2',
        title: 'SVG Repo',
        author: 'SVGRepo',
        description: 'Miles de SVGs gratuitos y personalizables',
        img: 'https://www.svgrepo.com/favicon-32x32.png',
        href: 'https://www.svgrepo.com/'
    },
    {
        id: '3',
        title: 'Google Fonts',
        author: 'Google',
        description: 'Librería de fuentes web gratuitas',
        img: 'https://fonts.google.com/favicon.ico',
        href: 'https://fonts.google.com/'
    },
    {
        id: '4',
        title: 'Haikei',
        author: 'Haikei',
        description: 'Generador de fondos SVG únicos',
        img: 'https://haikei.app/icons/icon-96x96.png',
        href: 'https://haikei.app/'
    },
     {
        id: '5',
        title: 'Pigment',
        author: 'ShapeFactory',
        description: 'Paleta de colores, gradientes, etc.',
        img: 'https://pigment.shapefactory.co/static/images/ogimage.jpg',
        href: 'https://pigment.shapefactory.co/'
    },
    {
    id: '6',
    title: 'Excalidraw',
    author: 'Excalidraw',
    description: 'Herramienta de dibujo colaborativa estilo boceto, ideal para wireframes, diagramas y esquemas UI',
    img: 'https://excalidraw.com/favicon.png',
    href: 'https://excalidraw.com/'
}

]
