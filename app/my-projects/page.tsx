import React from "react";
import { getProjectCards } from "@data/project";
import { ProjectCard } from "@components/my-projects/ProjectCard";
import { Meditation } from "@components/my-projects/Meditation";
import TypeAnimationComp from "@components/TypeAnimationComp";

const ProjectPage: React.FC = () => {
  return (
    <div className="page_wrapper mb-10 sm:mb-0 sm:gap-0 sm:flex_center">
      <div className="flex_center gap-16 py-5 px-20 mb-20 bg-secondary rounded-lg w-full sm:px-10 sm:gap-0 sm:flex-col">
        <div className="basis-[50%] mb-20 text-black font-bold sm:text-center sm:mb-0 sm:flex_center ">
          <h1 className="head_text">My Projects</h1>
          <div className="font-bree text-xl min-h-[115px]">
            <TypeAnimationComp
              sequence={[
                "Paying close attention to detail, I try to keep the code clean, well-organized, and bug-free.",
                2000,
              ]}
            />
          </div>
        </div>
        <Meditation />
      </div>
      <ul className="flex flex-col sm:gap-0">
        {getProjectCards.map(card => (
          <ProjectCard key={card.id} card={{ ...card }} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
