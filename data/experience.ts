import { IExperience } from "@models/experience";
import { MdWorkOutline } from "react-icons/md";

export const experience: IExperience[] = [
  {
    id: 0,
    title: "Rukki Pro",
    dateStart: "2023-02-01T00:00:00.035Z",
    dateEnd: "2023-06-15T00:00:00.035Z",
    location: "Москва",
    link: "https://rukki.pro/",
    linkTitle: "rukki.pro",
    position: "Junior Frontend-Developer",
    description:
      "Работал в удаленном формате, участвовал в реализации интерфейсов. Присоединился к проекту на финальной стадии и успешно влился. Успешно устранил все баги интерфейса, оптимизировал приложение, на текущий момент заканчиваю реализацию всех бизнес-требований и совместно с командой готовлю проект к production",
    stack: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Javascript",
      "Typescript",
      "Styled Components",
    ],
    icon: MdWorkOutline,
  },
  {
    id: 1,
    title: "Техномедия",
    dateStart: "2022-10-01T00:00:00.035Z",
    dateEnd: "2023-02-15T00:00:00.035Z",
    location: "Петрозаводск",
    link: "https://sysdyn.ru/",
    linkTitle: "sysdyn.ru",
    position: "Intern Frontend-Developer",
    description:
      "Пришел в компанию начинающим разработчиком, участвовал в обсуждениях, фиксил баги, дорабатывал существующие web-приложения и участвовал в разработке новых",
    stack: [
      "React",
      "Redux Toolkit",
      "Javascript",
      "Typescript",
      "Styled Components",
      "Tailwind",
    ],
    icon: MdWorkOutline,
  },
  {
    id: 2,
    title: "Фриланс",
    dateStart: "2021-12-01T00:00:00.035Z",
    dateEnd: "2022-09-15T00:00:00.035Z",
    location: "",
    link: "",
    linkTitle: "",
    position: "Frontend-developer",
    description:
      "Разработка web-приложений , адаптивная и кроссбраузерная верстка, поддержка сайтов и приложений",
    stack: [
      "React",
      "Javascript",
      "Typescript",
      "Styled Components",
      "SASS",
      "Bootstrap",
    ],
    icon: MdWorkOutline,
  },
];
