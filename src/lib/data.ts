export interface Card {
    id: string;
    title: string;
    author?: string;
    description: string;
    img: string;
    href: string;
    tags?: string[];
    isFavorite: boolean;

}
export const htmlData: Card[] = [
    {
        id: '1',
        title: 'HTML Reference',
        author: 'HTMLReference.io',
        description: 'Guía visual e interactiva de HTML',
        img: 'https://assets.awwwards.com/awards/external/2017/09/59c0d51d317e2.jpg',
        href: 'https://htmlreference.io/',
        tags: ['reference', 'visual', 'interactive'],
        isFavorite: false,
    },
    {
        id: '2',
        title: 'Can I use',
        author: 'Fyrd',
        description: 'Compatibilidad de HTML5 y otras APIs en navegadores',
        img: 'https://caniuse.com/img/favicon-128.png',
        href: 'https://caniuse.com/',
        tags: ['compatibility', 'browsers'],
        isFavorite: true

    },
    {
        id: '3',
        title: 'Frontend Checklist',
        author: 'David Dias',
        description: 'Lista de verificación para buenas prácticas HTML',
        img: 'https://frontendchecklist.io/img/logos/logo-front-end-checklist.jpg',
        href: 'https://frontendchecklist.io/',
        tags: ['checklist', 'best-practices'],
        isFavorite: true

    },
    {
        id: '4',
        title: 'W3Schools HTML',
        author: 'W3Schools',
        description: 'Tutorial y referencia HTML con ejemplos interactivos',
        img: 'https://asset.brandfetch.io/idpvfx7WEN/id775MPmpA.png',
        href: 'https://www.w3schools.com/html/',
        tags: ['tutorial', 'examples'],
        isFavorite: false
    },
    {
        id: '5',
        title: 'HTML Dog',
        author: 'HTML Dog',
        description: 'Tutoriales de HTML desde nivel básico hasta avanzado',
        img: 'https://www.designveloper.com/wp-content/uploads/2022/10/2-1200x822.png',
        href: 'https://htmldog.com/guides/html/',
        tags: ['tutorial', 'levels'],
        isFavorite: false
    },
    {
        id: '6',
        title: 'FreeCodeCamp HTML',
        author: 'freeCodeCamp',
        description: 'Curso gratuito de HTML5 interactivo',
        img: 'https://vectorlogoseek.com/wp-content/uploads/2019/04/freecodecamp-vector-logo.png',
        href: 'https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5',
        tags: ['course', 'free'],
        isFavorite: false
    },
    {
        id: '7',
        title: 'HTML CheatSheet',
        author: 'OverAPI',
        description: 'Resumen visual de HTML para consultar rápidamente',
        img: 'https://i.postimg.cc/tRNbG1Rk/HTML-CSS-Cheat-Sheet.png',
        href: 'https://overapi.com/html',
        tags: ['cheatsheet', 'quick-reference'],
        isFavorite: true

    },
    {
        id: '8',
        title: 'CodePen Challenges',
        author: 'CodePen',
        description: 'Retos semanales para practicar HTML y CSS',
        img: 'https://logowik.com/content/uploads/images/codepen4547.logowik.com.webp',
        href: 'https://codepen.io/challenges',
        tags: ['challenges', 'practice'],
        isFavorite: false
    },
    {
        id: '9',
        title: 'codi.link',
        author: 'MiduDev',
        description: 'Editor de codigo en tiempo real html, css y js',
        img: 'https://i.ytimg.com/vi/EsE8MvxJTdA/maxresdefault.jpg',
        href: 'https://codi.link/',
        tags: ['editor', 'realtime'],
        isFavorite: true

    },
];

export const gitData: Card[] = [
    {
        id: '1',
        title: 'Oh My Git!',
        author: 'blinry',
        description: 'Juego interactivo para aprender Git',
        img: 'https://ohmygit.org/assets/images/cover.png',
        href: 'https://ohmygit.org/',
        tags: ['game', 'learn'],
        isFavorite: true

    },
    {
        id: '2',
        title: 'Learn Git Branching',
        author: 'Peter Cottle',
        description: 'Simulador interactivo para aprender Git y branching',
        img: 'https://devlog.cyconet.org/content/images/2013/02/learninggitbranching.png',
        href: 'https://learngitbranching.js.org/',
        tags: ['simulator', 'branches'],
        isFavorite: true

    },
    {
        id: '4',
        title: 'GitHub Learning Lab',
        author: 'GitHub',
        description: 'Tutoriales interactivos para aprender Git y GitHub',
        img: 'https://miro.medium.com/v2/resize:fit:1200/1*Z16CjNHE7dV_WVT82_GtbQ.png',
        href: 'https://lab.github.com/',
        tags: ['tutorial', 'interactive'],
        isFavorite: true

    },
    {
        id: '5',
        title: 'Git Cheatsheet',
        author: 'GitHub Training',
        description: 'Hoja de referencia rápida con comandos de Git',
        img: 'https://www.git-tower.com/learn/cheat-sheets/git-de/git-cheat-sheet-large01-de.png',
        href: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
        tags: ['cheatsheet', 'quick-reference'],
        isFavorite: true

    },
    {
        id: '6',
        title: 'Visualizing Git',
        author: 'git-school',
        description: 'Visualizador interactivo de comandos Git',
        img: 'https://livablesoftware.com/wp-content/uploads/2020/02/visualmerge-1080x588.png',
        href: 'https://git-school.github.io/visualizing-git/',
        tags: ['visual', 'commands'],
        isFavorite: false

    },
    {
        id: '7',
        title: 'Oh Shit, Git!',
        author: 'Katie Sylor-Miller',
        description: 'Soluciones rápidas a errores comunes de Git',
        img: 'https://th.bing.com/th/id/R.e867a319aeb1a9b3e7f94adcd2579f5c?rik=O4gpCjFN57511g&pid=ImgRaw&r=0',
        href: 'https://ohshitgit.com/',
        tags: ['tips', 'errors'],
        isFavorite: false

    },
    {
        id: '9',
        title: 'Pro Git Book',
        author: 'Scott Chacon',
        description: 'Libro completo y gratuito sobre Git',
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465277717i/30365702._UY630_SR1200,630_.jpg',
        href: 'https://git-scm.com/book/en/v2',
        tags: ['book', 'comprehensive'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'Git Kraken Guide',
        author: 'GitKraken',
        description: 'Recursos y guía visual para Git con GitKraken',
        img: 'https://help.gitkraken.com/wp-content/uploads/draganddrop.gif',
        href: 'https://www.gitkraken.com/learn/git/tutorials',
        tags: ['guide', 'visual'],
        isFavorite: true

    }
];

export const cssData: Card[] = [
    {
        id: '1',
        title: 'UI VERSE',
        author: 'Community',
        description: 'Diseños css de componentes',
        img: 'https://tse2.mm.bing.net/th/id/OIP.ukqO-RMimtJEy6C84SzEAgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://uiverse.io/',
        tags: ['components', 'designs'],
        isFavorite: true

    },
    {
        id: '2',
        title: 'Bento Grids',
        author: 'Ivan Volti',
        description: 'Templates Bento Grids',
        img: 'https://bentogrids.com/images/og.png',
        href: 'https://bentogrids.com/',
        tags: ['templates', 'layout'],
        isFavorite: true

    },
    {
        id: '3',
        title: 'Animista',
        author: 'Ana Travas',
        description: 'Colección de animaciones CSS listas para usar',
        img: 'https://www.sliderrevolution.com/wp-content/uploads/2023/08/Animista.jpg',
        href: 'https://animista.net/',
        tags: ['animations', 'css'],
        isFavorite: true

    },
    {
        id: '4',
        title: 'Neumorphism.io',
        author: 'Adam Giebl',
        description: 'Generador de estilos Neumorphism en CSS',
        img: 'https://benrito.net/images/neumorphism-io-960w.png',
        href: 'https://neumorphism.io/',
        tags: ['generator', 'neumorphism'],
        isFavorite: false

    },
    {
        id: '5',
        title: 'Glassmorphism Generator',
        author: 'Hype4',
        description: 'Generador de efectos glassmorphism en CSS',
        img: 'https://static.vecteezy.com/system/resources/previews/003/107/882/non_2x/modern-glassmorphism-icon-free-vector.jpg',
        href: 'https://hype4.academy/tools/glassmorphism-generator',
        tags: ['generator', 'glassmorphism'],
        isFavorite: false

    },
    {
        id: '6',
        title: 'Color Space',
        author: '',
        description: 'Generador de paletas desde un solo color',
        img: 'https://th.bing.com/th/id/R.370117d89b4887e2659cf01738093445?rik=DfwaK8Urf7YYwg&pid=ImgRaw&r=0',
        href: 'https://mycolor.space/',
        tags: ['palette', 'colors'],
        isFavorite: false

    },
    {
        id: '7',
        title: 'Flexbox Froggy',
        author: 'Thomas Park',
        description: 'Juego para aprender Flexbox de manera interactiva',
        img: 'https://tse1.mm.bing.net/th/id/OIP.fQdbxQ1AbZNEpVyrXiFGhgHaD0?rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://flexboxfroggy.com/',
        tags: ['game', 'flexbox'],
        isFavorite: true

    },
    {
        id: '8',
        title: 'Grid Garden',
        author: 'Thomas Park',
        description: 'Juego para aprender CSS Grid con zanahorias',
        img: 'https://th.bing.com/th/id/R.76f456545a2c94cf952813bdf53a1ae9?rik=mt8hGZzKv%2feSQQ&pid=ImgRaw&r=0',
        href: 'https://cssgridgarden.com/',
        tags: ['game', 'grid'],
        isFavorite: true

    },
    {
        id: '9',
        title: 'CSSBattle',
        author: 'Community',
        description: 'Juego competitivo para escribir el CSS más preciso y corto posible',
        img: 'https://cssbattle.dev/images/banner.png',
        href: 'https://cssbattle.dev/',
        tags: ['game', 'challenges'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'CSS Tricks',
        author: 'Chris Coyier',
        description: 'Blog con trucos, guías y snippets de CSS',
        img: 'https://tse1.mm.bing.net/th/id/OIP.V_kQep0RWichAyUEXwJjaAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://css-tricks.com/',
        tags: ['blog', 'snippets'],
        isFavorite: false

    },
];


export const sqlData: Card[] = [
    {
        id: '1',
        title: 'Postgres Sandbox',
        author: 'Postgres',
        description: 'IA generadora de Bases de datos Postgres',
        img: 'https://tse4.mm.bing.net/th/id/OIP.R5cbGr7noYptDFPLEYZrpgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://database.build/',
        tags: ['generator', 'postgres'],
        isFavorite: true

    },
    {
        id: '2',
        title: 'ChartDB',
        author: '',
        description: 'Creadora de diagramas de bases de datos',
        img: 'https://repository-images.githubusercontent.com/838212912/3063460a-4c7c-4b4d-aea5-1e9760aa7a37',
        href: 'https://chartdb.io/',
        tags: ['diagram', 'erd'],
        isFavorite: true

    },
    {
        id: '3',
        title: 'SQLBolt',
        author: 'SQLBolt',
        description: 'Aprende SQL con lecciones interactivas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNrzFDBFrnO44tIUxYbR01AiO0ZnVV7WawA&s',
        href: 'https://sqlbolt.com/',
        tags: ['interactive', 'learning'],
        isFavorite: true

    },
    {
        id: '4',
        title: 'DBDiagram.io',
        author: 'Holistics',
        description: 'Crea diagramas ER visualmente',
        img: 'https://community.dbdiagram.io/uploads/default/original/1X/79d41edfc6a7fb2c1ec85192747c23d765698509.png',
        href: 'https://dbdiagram.io/',
        tags: ['diagram', 'visual'],
        isFavorite: true

    },
    {
        id: '5',
        title: 'Mode SQL Tutorial',
        author: 'Mode Analytics',
        description: 'Curso interactivo de SQL con datasets reales',
        img: 'https://www.veeble.org/blog/wp-content/uploads/2023/12/Mode.png',
        href: 'https://mode.com/sql-tutorial/',
        tags: ['course', 'datasets'],
        isFavorite: false

    },
    {
        id: '6',
        title: 'SQLZoo',
        author: 'SQLZoo',
        description: 'Tutorial y ejercicios interactivos para SQL',
        img: 'https://sqlzoo.net/static/malones.svg',
        href: 'https://sqlzoo.net/',
        tags: ['tutorial', 'exercises'],
        isFavorite: false

    },
    {
        id: '7',
        title: 'W3Schools SQL',
        author: 'W3Schools',
        description: 'Tutorial interactivo de SQL para principiantes',
        img: 'https://diveintodigitalmarketing.com/wp-content/uploads/2024/09/w3schools-logo.png',
        href: 'https://www.w3schools.com/sql/',
        tags: ['tutorial', 'examples'],
        isFavorite: false

    },
    {
        id: '8',
        title: 'LeetCode SQL',
        author: 'LeetCode',
        description: 'Problemas de SQL para entrevistas técnicas',
        img: 'https://repository-images.githubusercontent.com/597198795/b64f4fe8-f839-47ba-af83-9f15fa6c19e7',
        href: 'https://leetcode.com/problemset/database/',
        tags: ['problems', 'interview'],
        isFavorite: false

    },
    {
        id: '9',
        title: 'StrataScratch',
        author: 'StrataScratch',
        description: 'Ejercicios de SQL con datasets reales',
        img: 'https://avatars.githubusercontent.com/u/36822423?s=200&v=4',
        href: 'https://www.stratascratch.com/',
        tags: ['exercises', 'datasets'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'Hackerrank SQL',
        author: 'Hackerrank',
        description: 'Práctica y desafíos SQL con rankings',
        img: 'https://cdn.prod.website-files.com/6613f45ec198bd785f4443d1/668832c41801ae5d22a45a1e_hackerrank-software.png',
        href: 'https://www.hackerrank.com/domains/sql',
        tags: ['challenges', 'ranking'],
        isFavorite: false

    },
];

export const jsData: Card[] = [
    {
        id: '1',
        title: 'Aprende JavaScript',
        author: 'Midu Dev',
        description: 'Curso progresivo e interactivo para JavaScript',
        img: 'https://midu.dev/courses/ultimas-novedades-javascript.webp',
        href: 'https://www.aprendejavascript.dev/?code=014ba690-ff0c-442d-89b2-e98b7832f6d7',
        tags: ['course', 'interactive'],
        isFavorite: true

    },
    {
        id: '2',
        title: 'JavaScript.info',
        author: 'Ilya Kantor',
        description: 'Documentación y tutorial de JS moderno',
        img: 'https://es.javascript.info/img/site_preview_en_512x512.png',
        href: 'https://javascript.info/',
        tags: ['documentation', 'modern'],
        isFavorite: false

    },
    {
        id: '3',
        title: '30 Seconds of Code',
        author: 'Community',
        description: 'Snippets útiles de JavaScript y más',
        img: 'https://repository-images.githubusercontent.com/112507086/c8627fc7-87fb-40a3-9548-5955abfdac96',
        href: 'https://www.30secondsofcode.org',
        tags: ['snippets', 'quick-reference'],
        isFavorite: false

    },
    {
        id: '4',
        title: 'Codewars',
        author: 'Community',
        description: 'Plataforma de desafíos para practicar JS y más',
        img: 'https://miro.medium.com/v2/resize:fit:1200/1*MBnlYS10H9B02GvAKJ-XFw.png',
        href: 'https://www.codewars.com/',
        tags: ['challenges', 'coding'],
        isFavorite: true

    },
    {
        id: '5',
        title: 'JavaScript 30',
        author: 'Wes Bos',
        description: '30 proyectos para practicar JavaScript puro',
        img: 'https://wptavern.com/wp-content/uploads/2017/01/javascript30.png',
        href: 'https://javascript30.com/',
        tags: ['projects', 'practice'],
        isFavorite: true

    },
    {
        id: '6',
        title: 'JSFiddle',
        author: 'JSFiddle',
        description: 'Entorno online para probar y compartir código JS',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKag7J1zevsAEddLhG_umubTobPnJNdDVrg&s',
        href: 'https://jsfiddle.net/',
        tags: ['sandbox', 'share'],
        isFavorite: true

    },
    {
        id: '8',
        title: 'LeetCode',
        author: 'LeetCode Inc.',
        description: 'Problemas de algoritmos para entrevistas técnicas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXxTsSVEjBo2YK3MKxHo2EwGy5tWY0bzzgA&s',
        href: 'https://leetcode.com/',
        tags: ['problems', 'algorithms'],
        isFavorite: false

    },
    {
        id: '9',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        description: 'Libro interactivo gratuito de JavaScript moderno',
        img: 'https://eloquentjavascript.net/img/cover.jpg',
        href: 'https://eloquentjavascript.net/',
        tags: ['book', 'interactive'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'RegexOne',
        author: 'Community',
        description: 'Practica expresiones regulares con ejercicios de JS',
        img: 'https://substackcdn.com/image/fetch/$s_!yQ1g!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3940870-fc95-4dec-8fd6-9b55d46f8cd7_350x200.png',
        href: 'https://regexone.com/',
        tags: ['regex', 'exercises'],
        isFavorite: true
    },

];

export const deployData: Card[] = [
    {
        id: '1',
        title: 'Netlify Drop',
        author: 'Netlify',
        description: 'Hostinger gratuito para paginas estáticas',
        img: 'https://logowik.com/content/uploads/images/netlify9261.jpg',
        href: 'https://app.netlify.com/',
        tags: ['static', 'frontend', 'CDN'],
        isFavorite: true

    },
    {
        id: '2',
        title: 'Vercel',
        author: 'Vercel Inc.',
        description: 'Deploy sencillo de proyectos front-end y full stack',
        img: 'https://logowik.com/content/uploads/images/vercel1868.jpg',
        href: 'https://vercel.com/',
        tags: ['fullstack', 'Next.js', 'CDN'],
        isFavorite: true

    },
    {
        id: '3',
        title: 'Surge',
        author: 'Surge',
        description: 'Despliegue simple de sitios estáticos desde la terminal',
        img: 'https://blog.logrocket.com/wp-content/uploads/2023/11/surge-logo.png?resize=768',
        href: 'https://surge.sh/',
        tags: ['static', 'CLI', 'CDN'],
        isFavorite: false

    },
    {
        id: '4',
        title: 'Render',
        author: 'Render.com',
        description: 'Despliegue gratuito de frontend y backend con bases de datos',
        img: 'https://thereadable.co/wp-content/uploads/2024/11/Render_logo_-_Black.jpg',
        href: 'https://render.com/',
        tags: ['fullstack', 'database', 'Docker'],
        isFavorite: false

    },
    {
        id: '5',
        title: 'Glitch',
        author: 'Glitch',
        description: 'Despliegue instantáneo de apps web, ideal para prototipos',
        img: 'https://repository-images.githubusercontent.com/308308522/536e2480-2299-11eb-95af-e1a31db1e9c9',
        href: 'https://glitch.com/',
        tags: ['fullstack', 'web-IDE', 'instant'],
        isFavorite: false

    },
    {
        id: '8',
        title: 'Fly.io',
        author: 'Fly.io',
        description: 'Despliegue de apps en servidores cercanos al usuario',
        img: 'https://tse2.mm.bing.net/th/id/OIP.-vuw8qZdW2jsCUw_KvPFyQHaE0?rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://fly.io/',
        tags: ['edge', 'Docker', 'fullstack'],
        isFavorite: false

    },
    {
        id: '9',
        title: 'Firebase Hosting',
        author: 'Google',
        description: 'Hosting para sitios web rápidos y seguros con HTTPS',
        img: 'https://ik.imagekit.io/laxaar/1687416018252Firebase.jpg',
        href: 'https://firebase.google.com/products/hosting',
        tags: ['database', 'PWA', 'HTTPS'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'GitHub Pages Docs',
        author: 'GitHub',
        description: 'Documentación oficial para desplegar con GitHub Pages',
        img: 'https://static.vecteezy.com/system/resources/previews/017/119/660/original/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg',
        href: 'https://docs.github.com/en/pages',
        tags: ['static', 'documentation', 'git-push'],
        isFavorite: true

    },
];
export const documentationData: Card[] = [
    {
        id: '1',
        title: 'Lenguaje JS',
        author: 'MANZ.DEV',
        description: 'Documentacion de tecnologias iniciando con un roadmap',
        img: 'https://manz.dev/software/manzdev-mkweb.png',
        href: 'https://lenguajejs.com/roadmap/',
        tags: ['roadmap', 'technologies'],
        isFavorite: true

    },
    {
        id: '2',
        title: 'DevDocs',
        author: 'Thibaut Courouble',
        description: 'Documentación unificada para múltiples tecnologías',
        img: 'https://media.licdn.com/dms/image/v2/D4E12AQHFzsp0JatGwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720499263572?e=2147483647&v=beta&t=PhBOXWZBFDl7Sk5TkN67wtGC-J8fRZ4lQxj0nmXP3Mw',
        href: 'https://devdocs.io',
        tags: ['documentation', 'unified'],
        isFavorite: true

    },
    {
        id: '3',
        title: 'MDN Web Docs',
        author: 'Mozilla',
        description: 'Documentación oficial para HTML, CSS y JS',
        img: 'https://community.mozilla.org/wp-content/uploads/2023/03/mdn-web-docs-header.png',
        href: 'https://developer.mozilla.org/',
        tags: ['official', 'web'],
        isFavorite: true

    },
    {
        id: '4',
        title: 'npm',
        author: 'npm',
        description: 'Documentación oficial para npm',
        img: 'https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png',
        href: 'https://www.npmjs.com/',
        tags: ['documentation', 'package'],
        isFavorite: true

    },
    {
        id: '6',
        title: 'W3Schools',
        author: 'W3Schools',
        description: 'Tutoriales y referencias rápidas de HTML, CSS, JS, SQL y más',
        img: 'https://asset.brandfetch.io/idpvfx7WEN/id775MPmpA.png',
        href: 'https://www.w3schools.com/',
        tags: ['tutorials', 'multi-tech'],
        isFavorite: false

    },
    {
        id: '8',
        title: 'Stack Overflow',
        author: 'Stack Exchange',
        description: 'Respuestas técnicas y ejemplos prácticos de todo tipo de tecnología',
        img: 'https://mms.businesswire.com/media/20210623005665/en/887084/23/logo-stackoverflow-2.jpg',
        href: 'https://stackoverflow.com/',
        tags: ['community', 'qa'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'Node.js Docs',
        author: 'OpenJS Foundation',
        description: 'Documentación oficial de Node.js',
        img: 'https://th.bing.com/th/id/R.427a3daf1921c30f0c72125ad0819e14?rik=i0dLK64jGVoeUg&pid=ImgRaw&r=0',
        href: 'https://nodejs.org/en/docs',
        tags: ['official', 'nodejs'],
        isFavorite: false

    },
];

export const designData: Card[] = [
    {
        id: '1',
        title: 'Coolors',
        author: 'Coolors.co',
        description: 'Generador de paletas de colores modernas',
        img: 'https://tse1.mm.bing.net/th/id/OIP.08Sy9Ruwwt23R8ymlcdV0QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://coolors.co/',
        tags: ['palette', 'colors'],
        isFavorite: false

    },
    {
        id: '2',
        title: 'SVG Repo',
        author: 'SVGRepo',
        description: 'Miles de SVGs gratuitos y personalizables',
        img: 'https://www.figma.com/community/thumbnail?resource_id=1200930158268112554&resource_type=plugin',
        href: 'https://www.svgrepo.com/',
        tags: ['icons', 'svg'],
        isFavorite: true

    },
    {
        id: '3',
        title: 'Google Fonts',
        author: 'Google',
        description: 'Librería de fuentes web gratuitas',
        img: 'https://www.creativosonline.org/wp-content/uploads/2023/03/Google-Fonts.jpg',
        href: 'https://fonts.google.com/',
        tags: ['fonts', 'web'],
        isFavorite: true

    },
    {
        id: '4',
        title: 'Haikei',
        author: 'Haikei',
        description: 'Generador de fondos SVG únicos',
        img: 'https://th.bing.com/th/id/R.5272c32f1f45c44a3a1eec83567c8176?rik=zbFZP1iHLI1Ahg&pid=ImgRaw&r=0',
        href: 'https://haikei.app/',
        tags: ['generator', 'backgrounds'],
        isFavorite: true

    },
    {
        id: '5',
        title: 'Pigment',
        author: 'ShapeFactory',
        description: 'Paleta de colores, gradientes, etc.',
        img: 'https://pigment.shapefactory.co/static/images/ogimage.jpg',
        href: 'https://pigment.shapefactory.co/',
        tags: ['palette', 'gradients'],
        isFavorite: true

    },
    {
        id: '6',
        title: 'Excalidraw',
        author: 'Excalidraw',
        description: 'Herramienta de dibujo colaborativa estilo boceto, ideal para wireframes, diagramas y esquemas UI',
        img: 'https://plus.excalidraw.com/twitter_card.png?v1',
        href: 'https://excalidraw.com/',
        tags: ['diagrams', 'collaborative'],
        isFavorite: true

    },
    {
        id: '7',
        title: 'Dribbble',
        author: 'Comunidad',
        description: 'Inspiración de diseño UI/UX de miles de creativos',
        img: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/05/dribbble-logo.png',
        href: 'https://dribbble.com/',
        tags: ['inspiration', 'community'],
        isFavorite: false

    },
    {
        id: '8',
        title: 'Behance',
        author: 'Adobe',
        description: 'Portafolios e ideas de diseño, ilustración y UI',
        img: 'https://th.bing.com/th/id/OIP.TORd20o2Fiq-7ylCz4lQjgHaEv?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        href: 'https://www.behance.net/',
        tags: ['portfolios', 'inspiration'],
        isFavorite: false

    },
    {
        id: '9',
        title: 'Figma Community',
        author: 'Figma',
        description: 'Recursos, plantillas e inspiración de diseño UI gratuitos',
        img: 'https://1000logos.net/wp-content/uploads/2024/09/Figma-Logo.jpg',
        href: 'https://www.figma.com/community',
        tags: ['resources', 'ui'],
        isFavorite: false

    },
    {
        id: '10',
        title: 'Fontpair',
        author: 'Fontpair',
        description: 'Combinaciones de tipografías listas para usar',
        img: 'https://cdn.dribbble.com/users/2374674/screenshots/16300477/firasans_4x.png',
        href: 'https://www.fontpair.co/',
        tags: ['typography', 'pairing'],
        isFavorite: false
    },

    {
        id: '11',
        title: 'Color Hunt',
        author: 'Gal Shir',
        description: 'Paletas de colores modernas y listas para copiar',
        img: 'https://th.bing.com/th/id/R.9fa2887d2b2095e0195a21fbd0852980?rik=qyNTFz72RKYueg&pid=ImgRaw&r=0',
        href: 'https://colorhunt.co/',
        tags: ['palette', 'trending'],
        isFavorite: false

    },

    {
        id: '12',
        title: 'Ray.so',
        author: 'Ray.so',
        description: 'Genera capturas de código con estilo limpio y personalizable para compartir en redes.',
        img: 'https://yellow-cdn.veclightyear.com/9c1531b0/613c79ed-f4d2-4981-ae3a-68880db60b90.png?x-oss-process=image/format,webp/resize,w_1200,h_600,m_fill/quality,q_85',
        href: 'https://ray.so/',
        tags: ['screenshots', 'code'],
        isFavorite: true

    },
    {
        id: '13',
        title: 'Kaboompics',
        author: '',
        description: 'Biblioteca gratuita de imagenes en 4k',
        img: 'https://cdn-1.webcatalog.io/catalog/kaboompics/kaboompics-social-preview.png?v=1714774851537',
        href: 'https://kaboompics.com/',
        tags: ['photos', 'stock'],
        isFavorite: true

    },
    {
        id: '14',
        title: 'SVGOMG',
        author: 'SVGOMG',
        description: 'Optimizador de svg',
        img: 'https://jakearchibald.github.io/svgomg/imgs/icon.png',
        href: 'https://optimize.svgomg.net/',
        tags: ['SVG', 'Optimize'],
        isFavorite: false

    },
];

export const apisData: Card[] = [
    {
        id: '1',
        title: "OpenRouter",
        author: "OpenRouter",
        description: "Interfaz unificada para acceder a múltiples modelos de IA como OpenAI, Anthropic, Cohere, etc.",
        href: "https://openrouter.ai/",
        img: "https://miro.medium.com/v2/resize:fit:1200/0*zuYZ0-wGZ4G2Didt.png",
        tags: ['api', 'multi-models'],
        isFavorite: true

    },
    {
        id: '2',
        title: "Stripe API",
        author: "Stripe",
        description: "API moderna y bien documentada para pagos online, fácil de integrar y probar.",
        href: "https://stripe.com/docs/api",
        img: "https://th.bing.com/th/id/R.1165fed80b1827926d282051d1b63d10?rik=QRM8Qm2%2fkQX4Mw&pid=ImgRaw&r=0",
        tags: ['payments', 'integration'],
        isFavorite: true

    },
    {
        id: '3',
        title: "RapidAPI Hub",
        author: "RapidAPI",
        description: "Marketplace para explorar, probar y conectar con miles de APIs gratuitas y premium.",
        href: "https://rapidapi.com/hub",
        img: "https://mms.businesswire.com/media/20220323005325/en/1398284/23/RapidAPI_logo_blue_(1).jpg",
        tags: ['marketplace', 'testing'],
        isFavorite: true

    },
    {
        id: '4',
        title: "DummyJSON",
        author: "dummyjson.com",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://dummyjson.com/",
        img: "https://preview.redd.it/i-built-an-open-source-dummy-json-api-using-node-which-v0-oq64merbjdlc1.png?width=1206&format=png&auto=webp&s=32cc81cf66df20a9f1124a9037d31d0cd12c5e86",
        tags: ['mock-data', 'practice'],
        isFavorite: true

    }
];
export const videosData: Card[] = [
    {
        id: '1',
        title: "Aplicaciones que Debes Construir como Desarrollador Full-Stack, Front-End y Back-End 💻",
        author: "midulive",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=Osy0yuxuEOw&t=1672s",
        img: "https://i.ytimg.com/vi/Osy0yuxuEOw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJZqfnMOdFFR7EP2YZuaIxnmvMFg",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '2',
        title: "¿Donde desplegar bases de datos de SQL para proyectos reales?",
        author: "Fazt Code",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=NsaAN6diuw4",
        img: "https://i.ytimg.com/vi/NsaAN6diuw4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAczsw79nGY9LfjQjJWWBJ9UwZZLg",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '3',
        title: "Aprende Node.js y Express - Curso desde Cero",
        author: "freeCodeCamp Español",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=1hpc70_OoAg/",
        img: "https://i.ytimg.com/vi/1hpc70_OoAg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBFxFtQa81lPmFW9BFQ73x-5MxY1g",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '4',
        title: "ASTRO: Cómo crear una WEB DESDE CERO (para Principiantes)",
        author: "MoureDev by Brais Moure",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=Qe7MytTo7Vg&t=432s",
        img: "https://i.ytimg.com/vi/Qe7MytTo7Vg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDRVzBoqWehDXpl_z1dCceQexXWDg",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '5',
        title: "JAVASCRIPT desde cero | Curso tutorial completo gratis por Sergie Code",
        author: "Sergie Code",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=N8Xt5rP_DUo",
        img: "https://i.ytimg.com/vi/N8Xt5rP_DUo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCg_C859Ba1Wk6aUaLVMMuCw4dfPw",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '6',
        title: "¿Cómo crear el PORTAFOLIO PERFECTO para PROGRAMADORES?",
        author: "MoureDev TV",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=zFbTXe1yFGA&t=817s",
        img: "https://i.ytimg.com/vi/zFbTXe1yFGA/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDJDN5Y8WBPDlKNLLn8W28cwyBttQ",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '7',
        title: "Crazy 3D Rotation Effect Using CSS Only",
        author: "Lun Dev",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=ymuBowcODVU",
        img: "https://i.ytimg.com/vi/ymuBowcODVU/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD4UXl9Pjy5GXNXMGiPpqwtDeaweQ",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '8',
        title: "CURSO REACT.JS - Aprende desde cero",
        author: "midulive",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29",
        img: "https://i.ytimg.com/vi/7iobxzd_2wY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCbVv5emu9CK1dGD1A520aNlAQbTw",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '9',
        title: "Curso de HTML y CSS desde CERO (Completo)",
        author: "Soy Dalto",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=ELSm-G201Ls&t=21646s",
        img: "https://i.ytimg.com/vi/ELSm-G201Ls/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLk90gBLHy_TuBTM8MXQz06ffgDg",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
    {
        id: '10',
        title: "estas tomando MAL los cursos...",
        author: "Soy Dalto",
        description: "API gratuita con datos falsos (usuarios, productos, etc.) para practicar sin backend.",
        href: "https://www.youtube.com/watch?v=CdX02ruaCGk",
        img: "https://i.ytimg.com/vi/CdX02ruaCGk/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCmbKY5vz7aHGMYflMhRuULV766cg",
        tags: ['mock-data', 'practice'],
        isFavorite: false

    },
]