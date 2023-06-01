export interface IProjectCard {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
  descriptionAdded: string;
  liveLink: string;
  codeLink: string;
  slider: string[];
}

export type ProjectCardProps = {
  card: IProjectCard;
};
