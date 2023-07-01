import React from "react";
import Image from "next/image";
import AboutImage from "public/assets/images/about.jpg";
import HeroImage from "public/assets/images/hero.png";
import { Skills, TimeLine } from "@components";
import { getParagraphs } from "@data";

export const metadata = {
  title: "Stepanov Igor | About",
};

const AboutPage: React.FC = () => {
  return (
    <div className="page_wrapper gap-16 sm:gap-4">
      <div className="bg-secondary flex_center flex-col rounded-lg basis-[40%] p-10 sm:p-4 md:w-full">
        <h1 className="head_text text-black">About Me</h1>
        <Image
          src={AboutImage}
          alt="about"
          width={600}
          height={400}
          className="p-10 sm:p-0"
          priority
          quality={100}
        />

        <Skills />
      </div>
      <div className="flex-1">
        <div />
        <Image
          src={HeroImage}
          alt="hero"
          className="mx-auto h-auto w-[300px] mb-10 sm:w-[200px] sm:my-4"
        />
        <ul className="flex flex-col gap-y-4 font-bree">
          {getParagraphs.map(p => (
            <li key={p.id}>{p.text}</li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full bg-[url(../public/assets/icons/bg.svg)] rounded-lg">
        <h2 className="head_text text-center p-10 sm:p-5 text-secondary">
          Experience
        </h2>
        <TimeLine />
      </div>
    </div>
  );
};

export default AboutPage;
