import React from "react";
import { ProjectCardProps } from "@models/card";
import Image from "next/image";
import { getProjectCards } from "@data/project";

export const ProjectCard: React.FC<ProjectCardProps> = ({ card }) => {
  const isLastCard = card.id === getProjectCards.length - 1;

  return (
    <li className="flex justify-between flex-row flex-wrap sm:gap-4 sm:flex-col sm:min-h-screen">
      <div className="flex flex-col basis-1/2 text-[16px] sm:text-[14px] p-8 pl-0 sm:p-4 sm:gap-4">
        <h2 className="font-bree bold text-4xl mb-10 text-secondary sm:text-3x sm:mb-2">
          {card.title}
        </h2>
        <div className="mb-5">{card.description}</div>
        <div className="flex_start gap-5 mt-auto mb-4 mr-4">
          <a href={card.liveLink} target="_blank" rel="noopener noreferrer">
            <div className="btn btn-border-drawing">View Live</div>
          </a>
          <a href={card.codeLink} target="_blank" rel="noopener noreferrer">
            <div className="btn btn-border-drawing">Code Source</div>
          </a>
        </div>
      </div>
      <div className="relative h-[400px]">
        <div className="transition-transform duration-700 h-[400px]">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              src={card.image}
              alt="Project Image"
              priority
              width={600}
              height={400}
              className="object-cover h-full rounded-lg hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      <div className={`line ${isLastCard && "hidden"}`} />
    </li>
  );
};
