import { Project } from "src/app/TYPES/project.model";

export const projectsList: Project[] = [
  {
    description: "Una calculadora hecha utilizando clases en Javascript y con la libreria P5.js para añadirle efectos de sonido",
    image: "/assets/images/calculadora.jpeg",
    link: "https://grand-stardust-b41bcd.netlify.app/",
    subtitle: "Hecha con Javascript",
    title: "Calculadora"
  },
  {
    description: 'Clon del famoso e-commerce "Amazon". Se encuentra hecho con Angular y esta subido el hosting a firebase como así tambien utiliza la autentificación de firebase. Todavía se encuentra en proceso de construcción el sitio',
    image: '/assets/images/clonDeAmazon.jpeg',
    link: '/assets/images/clonDeAmazon.jpeg',
    subtitle: 'tienda de e-commerce',
    title: 'Clon de Amazon'
  },
  {
    description: 'Un simple contador hecho como proyecto de aprendizaje. Tiene un aspecto minimalista.',
    image: '/assets/images/contador.jpeg',
    link: 'https://fabianguarascio.github.io/contador.github.io/',
    subtitle: 'Puede hasta hacer raizes cuadradas, muy util.',
    title: 'Contador'
  },
  {
    description: 'Es un clon de la pagina de e-commerce de compra gamer. El front end esta hecho con angular, conectada mediante una app hecha con java/SpringBoot a una base de datos Mysql para mostrar los productos',
    image: '/assets/images/compraGamer.png',
    link: 'https://compragamerclon.web.app/',
    subtitle: 'Hecha con Angular, SpringBoot y MySQL',
    title: 'Clon de "compra gamer"'
  }

]
