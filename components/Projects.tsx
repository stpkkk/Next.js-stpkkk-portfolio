import React from "react";
import { ProjectCard } from "./ProjectCard";
import { getProjectCards } from "@data/project";

export const Projects: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <h1 className="head_text flex_end">Projects</h1>
      <ul className="grid grid-flow-col grid-rows-2 gap-10 w-full sm:gap-5">
        {getProjectCards.map((card, index) => (
          <ProjectCard key={index} card={{ ...card }} index={index} />
        ))}
      </ul>
    </div>
  );
};
