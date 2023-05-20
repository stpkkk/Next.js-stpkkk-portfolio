"use client";

import React, { useState } from "react";
import { ProjectCardProps } from "@models/card";
import Image from "next/image";

interface ShowContent {
  [key: number]: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ card, index }) => {
  const [showContent, setShowContent] = useState<ShowContent>({});

  const handleMouseEnter = (index: number) => {
    setShowContent(prev => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    setShowContent(prev => ({ ...prev, [index]: false }));
  };

  return (
    <li
      className="relative h-[350px] "
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <Image
        src={card.image}
        alt="Project Image"
        width={565}
        height={350}
        className="object-cover h-full rounded-lg"
      />
      {showContent[index] && (
        <div className="flex flex-col p-[20px] absolute bottom-0 left-0 right-0 bg-[#ffffff10] bg-opacity-80 transition-opacity duration-300 h-full w-full rounded-lg backdrop-blur-[12px]">
          <div className="flex flex-col h-full">
            <div className="text-[16px] sm:text-[14px]">{card.description}</div>
            <div className="flex gap-5 ml-auto mt-auto mb-4 mr-4">
              <a className="btn-link" href={card.liveLink} target="_blank">
                View Live
              </a>
              <a className="btn-link" href={card.codeLink} target="_blank">
                Code Source
              </a>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
