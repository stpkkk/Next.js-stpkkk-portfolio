import React from "react";
import { Metadata } from "next";
import { getProjectCards } from "@data";
import { Slider, Button } from "@components";

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

  if (!project) {
    return (
      <div className="text-3xl flex_center text-primary p-20 font-bree">
        Project not found 😢
      </div>
    );
  }

  const { title, description, liveLink, codeLink, slider } = project;

  return (
    <div className="page_wrapper flex-col">
      <h1 className="head_text text-secondary">{title}</h1>
      <div className="self-start text-justify mb-10 sm:mb-4 max-w-[800px]">
        {description.map((p, i) => (
          <p key={i}>
            {p}
            <br />
            <br />
          </p>
        ))}
        <div className="flex_start gap-5 mb:20 sm:mb-4 sm:mr-4">
          {liveLink && (
            <Button url={liveLink} target="_blank" text="View Live" />
          )}
          {codeLink && (
            <Button url={codeLink} target="_blank" text="Code Source" />
          )}
        </div>
      </div>
      <Slider slides={slider} />
    </div>
  );
}
