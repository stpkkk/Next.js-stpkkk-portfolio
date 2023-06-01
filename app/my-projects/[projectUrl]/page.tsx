import React from "react";
import { Metadata } from "next";
import { getProjectCards } from "@data/project";
import { Slider } from "@components/my-projects/Slider";
import Link from "next/link";

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
      <div className="text-3xl flex_center p-20 font-bree">
        Project not found 😢
      </div>
    );
  }

  const { title, description, liveLink, codeLink, slider } = project;

  return (
    <div className="page_wrapper flex-col">
      <h1 className="head_text text-secondary">{title}</h1>
      <div className="self-start mb-10 sm:mb-4 max-w-[800px]">
        {description.map((p, i) => (
          <p key={i}>
            {p}
            <br />
            <br />
          </p>
        ))}
        <div className="flex_start gap-5 mb:20 sm:mb-4 sm:mr-4">
          {liveLink && (
            <Link
              href={liveLink}
              as={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-border-drawing">
                View Live
              </button>
            </Link>
          )}
          {codeLink && (
            <Link
              href={codeLink}
              as={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-border-drawing">
                Code Source
              </button>
            </Link>
          )}
        </div>
      </div>
      <Slider slides={slider} />
    </div>
  );
}
