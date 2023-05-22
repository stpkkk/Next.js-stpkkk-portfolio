import { StaticImageData } from "next/image";

export type ProjectCardProps = {
  card: {
    id: number;
    title: string;
    image: StaticImageData;
    description: string;
    liveLink: string;
    codeLink: string;
  };
};
