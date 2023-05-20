import React from "react";
import { getProjectCards } from "@data/project";
import { ProjectCard } from "@components/ProjectCard";

const ProjectPage: React.FC = () => {
  return (
    <div className="page_wrapper flex flex-col sm:gap-0">
      <h1 className="head_text">My Projects</h1>
      <ul className="flex gap-20 flex-col sm:gap-4">
        {getProjectCards.map((card, index) => (
          <ProjectCard key={index} card={{ ...card }} index={index} />
        ))}
      </ul>
    </div>
  );
};
export default ProjectPage;
