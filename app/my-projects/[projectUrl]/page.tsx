import React from "react";
import { Metadata } from "next";
import { getProjectCards } from "@data/project";
import { Slider } from "@components/my-projects/Slider";

type Props = {
  params: {
    projectUrl: string;
  };
};

export async function generateMetadata({
  params: { projectUrl },
}: Props): Promise<Metadata> {
  return {
    title: `Stepanov Igor | ${projectUrl}`,
  };
}

export default async function Project({ params: { projectUrl } }: Props) {
  const project = getProjectCards.find(item => item.url === projectUrl);

  return (
    <div className="page_wrapper">
      <h1 className="head_text">{project?.title}</h1>
      <div className=" mb-[105px] sm:mb-[50px]">
        {project?.description}
        {project?.descriptionAdded}
      </div>
      <Slider slides={project?.slider} />
    </div>
  );
}
