import { StaticImageData } from "next/image";
import ImageGenerator from "../public/assets/images/image-generator/image-generator.png";
import Technomedia from "../public/assets/images/technomedia/technomedia.png";
import Welbex from "../public/assets/images/welbex/welbex-table.png";
import Lamborghini from "../public/assets/images/lamborghini/lamborghini.png";
import Dashboard from "../public/assets/images/dashboard/dashboard.png";

interface ProjectCard {
  id: number;
  title: string;
  image: StaticImageData;
  url: string;
  description: string;
  liveLink: string;
  codeLink: string;
  slider: StaticImageData[];
}

export const getProjectCards: ProjectCard[] = [
  {
    id: 0,
    title: "Image-Generator",
    image: ImageGenerator,
    url: "image-generator",
    description:
      "An image generator application that uses OpenAI API is a software tool that generates images based on user input, utilizing OpenAI`s deep learning models to learn and generate images according to specified parameters. The application may offer to save or share their generated images.",
    liveLink: "https://stpkk-image-generator.netlify.app/",
    codeLink: "https://github.com/stpkkk/Image-generator-OpenAI-API",
    slider: [ImageGenerator, Technomedia, Welbex, Lamborghini, Dashboard],
  },
  {
    id: 1,
    title: "Technomedia",
    image: Technomedia,
    url: "technomedia",
    description:
      "A single-page web application with three cards has been implemented: articles, courses and media, each card contains stories, by clicking on the title of the story, the article, course or media of the same name opens.",
    liveLink: "https://stpk-technomedia.netlify.app/",
    codeLink: "https://github.com/stpkkk/Technomedia",
    slider: [Technomedia, Welbex, Lamborghini, Dashboard],
  },
  {
    id: 2,
    title: "Welbex-Table",
    image: Welbex,
    url: "welbex-table",
    description:
      "Test task for the position of a Frontend developer at Welbex using the React.js, PostgreSQL, Sass framework. A single-page web application has been implemented to display a table with the ability to sort and paginate. The backend part is implemented as PostgreSQL DBMS and pgAdmin application. The deployment of the server part of the project was implemented using the Heroku cloud and pgAdmin application",
    liveLink: "https://delivery-table.netlify.app/",
    codeLink: "https://github.com/stpkkk/React-Table-Test-Welbex",
    slider: [ImageGenerator, Technomedia, Welbex, Lamborghini, Dashboard],
  },
  {
    id: 3,
    title: "Lamborghini-Super-Trofeo",
    image: Lamborghini,
    url: "lamborghini",
    description:
      "This app is built using React, utilizes Typescript and Styled components also built to be efficient and fast, with the ability to change the layout and design depending on the device used. It is built with an adaptive design, which means that the layout and functionality of the website automatically adjusts to the user`s device. Made according to the figma layout",
    liveLink: "https://lamborghini-super-trofeo.netlify.app/",
    codeLink: "https://github.com/stpkkk/lamborghini-super-trofeo",
    slider: [ImageGenerator, Technomedia, Welbex, Lamborghini, Dashboard],
  },
  {
    id: 4,
    title: "Dashboard",
    image: Dashboard,
    url: "dashboard",
    description:
      "The Dashboard project is a web application that uses technologies like React, Redux Toolkit, TypeScript, Highcharts, and Styled Components to provide users with visual insights and analytics for a specific data set. The application fetches data from a JSON server and uses Highcharts to create customizable and interactive charts",
    liveLink: "https://stpkkk-dashboard.netlify.app/",
    codeLink: "https://github.com/stpkkk/Dashboard-React",
    slider: [ImageGenerator, Technomedia, Welbex, Lamborghini, Dashboard],
  },
];
