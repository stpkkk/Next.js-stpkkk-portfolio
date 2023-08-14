import { IconType } from "react-icons/lib";

export interface IExperience {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  link: string;
  linkTitle: string;
  position: string;
  description: string[];
  stack: string[];
  icon: IconType;
}
