import { StaticImageData } from "next/image";

export type ProjectCardProps = {
  card: {
    image: StaticImageData;
    description: string;
    liveLink: string;
    codeLink: string;
  };
  index: number;
};
