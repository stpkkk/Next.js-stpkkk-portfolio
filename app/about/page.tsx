import React from "react";
import Image from "next/image";
import AboutImage from "public/assets/images/about.jpg";
import HeroImage from "public/assets/images/hero.png";
import { getParagraphs } from "@data";
import { Skills, TimeLine } from "@components";

export const metadata = {
  title: "Stepanov Igor | About",
};

const AboutPage: React.FC = () => {
  return (
    <div className="page_wrapper gap-16 sm:gap-4">
      <div className="flex_center basis-[40%] flex-col rounded-lg bg-secondary p-10 sm:p-4 md:w-full">
        <h1 className="head_text text-black">Обо мне</h1>
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
          className="mx-auto mb-10 h-auto w-[300px] sm:my-4 sm:w-[200px]"
        />
        <ul className="flex flex-col gap-y-4 font-bree">
          {getParagraphs.map(p => (
            <li key={p.id}>{p.text}</li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full rounded-lg bg-[url(../public/assets/icons/bg.svg)]">
        <h2 className="head_text p-10 text-center text-secondary sm:p-5">
          Мой Опыт
        </h2>
        <TimeLine />
      </div>
    </div>
  );
};

export default AboutPage;
