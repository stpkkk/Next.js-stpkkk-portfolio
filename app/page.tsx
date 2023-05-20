"use client";
import React from "react";
import Image from "next/image";
import { useMobile } from "@hooks/useMediaQuery";
import GithubCvLinks from "@components/GithubCvLinks";
import TypeAnimationComp from "@components/TypeAnimationComp";
import { Clock } from "@components/Clock";

const HomePage: React.FC = () => {
  const isMobile = useMobile();

  return (
    <section className="flex_between w-full sm:gap-9 sm:flex-col flex_center">
      <div className="sm:p-2 ">
        <TypeAnimationComp />
        <h1 className="head_text sm:text-center sm:m-0">
          I am Igor Stepanov,&nbsp;
          <br className="sm:hidden" />a creative
          <br /> Frontend Developer.
        </h1>
        {isMobile || <GithubCvLinks />}
      </div>
      <div className="relative">
        <Image
          src="/assets/images/homepage.jpg"
          alt="homepage"
          width={600}
          height={400}
          className=" rounded-lg sm:rounded-none"
        />
        <div className="absolute top-[63px] left-[60px] sm:left-[14px] sm:top-[14px]">
          <Clock />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
