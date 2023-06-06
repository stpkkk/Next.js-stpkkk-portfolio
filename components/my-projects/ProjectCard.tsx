import React from "react";
import { ProjectCardProps } from "@models/card";
import Image from "next/image";
import { getProjectCards } from "@data/project";
import Link from "next/link";
import { Button } from "@components/Button";

export const ProjectCard: React.FC<ProjectCardProps> = ({ card }) => {
  const isLastCard = card.id === getProjectCards.length - 1;

  return (
    <li className="flex justify-between items-center flex-row flex-wrap  md:flex-col md:items-center">
      <div className="flex flex-col basis-1/2 flex-grow-1 text-[16px] sm:text-[14px] gap-10 md:mb-10">
        <Link href={`/my-projects/${card.url}`} as={`/my-projects/${card.url}`}>
          <h2 className="font-bree bold text-4xl text-secondary sm:text-3x sm:mb-2">
            {card.title}
          </h2>
        </Link>
        <p className="block">{card.description.at(0)}</p>
        <Button
          url={`/my-projects/${card.url}`}
          text="Learn More..."
          target="_self"
        />
      </div>
      <div className="transition-transform duration-700 ">
        <div className="relative rounded-lg">
          <Image
            src={card.image}
            alt="Project Image"
            priority
            quality={100}
            width={500}
            height={300}
            className="object-cover h-auto w-full rounded-lg hover:scale-110 transition-transform duration-700 md:w-screen"
          />
        </div>
      </div>
      <div className={`line ${isLastCard && "hidden"}`} />
    </li>
  );
};
