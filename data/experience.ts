import { IExperience } from "@models";
import { MdWorkOutline } from "react-icons/md";

export const experience: IExperience[] = [
  {
    id: 0,
    title: "Rukki Pro",
    dateStart: "2023-02-01T00:00:00.035Z",
    dateEnd: "2023-06-15T00:00:00.035Z",
    location: "Moscow",
    link: "https://rukki.pro/",
    linkTitle: "rukki.pro",
    position: "Junior Frontend-Developer",
    description:
      "Worked remotely, participated in the implementation of interfaces. I joined the project at the final stage and successfully cooperate with a team. I successfully eliminated all interface bugs, optimized the application, at the moment I am finishing the implementation of all business requirements and, together with the team, I am preparing the project for production",
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
    title: "Technomedia",
    dateStart: "2022-10-01T00:00:00.035Z",
    dateEnd: "2023-02-15T00:00:00.035Z",
    location: "Petrozavodsk",
    link: "https://sysdyn.ru/",
    linkTitle: "sysdyn.ru",
    position: "Intern Frontend-Developer",
    description:
      "Joined the company as a novice developer, participated in discussions, fixed bugs, improved existing web applications and participated in the development of new ones",
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
    title: "Freelance",
    dateStart: "2021-12-01T00:00:00.035Z",
    dateEnd: "2022-09-15T00:00:00.035Z",
    location: "",
    link: "",
    linkTitle: "",
    position: "Frontend-developer",
    description:
      "Development of web applications, adaptive and cross-browser layout, support for sites and applications",
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
