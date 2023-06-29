import React from "react";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiAxios,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiSass,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";

interface ISkill {
  id: number;
  Icon: React.FC<{ size?: number }>;
  title: string;
}

const skillList: ISkill[] = [
  { id: 0, Icon: SiNextdotjs, title: "Next.js" },
  { id: 1, Icon: SiReact, title: "React" },
  { id: 2, Icon: SiJavascript, title: "JavaScript" },
  { id: 3, Icon: SiTypescript, title: "TypeScript" },
  { id: 4, Icon: SiRedux, title: "Redux" },
  { id: 5, Icon: SiAxios, title: "Axios" },
  { id: 6, Icon: SiTailwindcss, title: "Tailwind" },
  { id: 7, Icon: SiSass, title: "Sass" },
  { id: 8, Icon: SiStyledcomponents, title: "Styled Components" },
  { id: 9, Icon: SiGit, title: "Git" },
];

export const Skills: React.FC = () => {
  return (
    <div className="p-4">
      <ul className="flex_center flex-wrap mx-auto gap-[20px] after:empty:flex-1">
        {skillList.map(({ id, Icon }) => (
          <li key={id} className="rounded-full text-black">
            <Icon size={40} />
          </li>
        ))}
      </ul>
    </div>
  );
};
