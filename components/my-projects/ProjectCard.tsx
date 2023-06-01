import React from "react";
import { ProjectCardProps } from "@models/card";
import Image from "next/image";
import { getProjectCards } from "@data/project";
import Link from "next/link";

export const ProjectCard: React.FC<ProjectCardProps> = ({ card }) => {
  const isLastCard = card.id === getProjectCards.length - 1;

  return (
    <li className="flex justify-between items-center flex-row flex-wrap sm:gap-4 md:flex-col md:items-center">
      <div className="flex flex-col basis-1/2 text-[16px] sm:text-[14px] sm:gap-4">
        <Link href={`/my-projects/${card.url}`} as={`/my-projects/${card.url}`}>
          <h2 className="font-bree bold text-4xl mb-10 text-secondary sm:text-3x sm:mb-2">
            {card.title}
          </h2>
        </Link>
        <div className="mb-20 sm:mb-5">{card.description}</div>
        <div className="flex_between">
          <div className="flex gap-5 mt-auto sm:mb-4 sm:mr-4">
            <Link
              href={card.liveLink}
              as={card.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-border-drawing">
                View Live
              </button>
            </Link>
            <Link
              href={card.codeLink}
              as={card.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-border-drawing">
                Code Source
              </button>
            </Link>
          </div>
          <Link
            href={`/my-projects/${card.url}`}
            as={`/my-projects/${card.url}`}
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-border-drawing">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="transition-transform duration-700">
        <div className="relative  rounded-lg">
          <Image
            src={card.image}
            alt="Project Image"
            priority
            width={600}
            height={300}
            className="object-cover h-auto w-full rounded-lg hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
      <div className={`line ${isLastCard && "hidden"}`} />
    </li>
  );
};
