"use client";
import Image from "next/image";
import React from "react";
import { useMobile } from "@hooks/useMediaQuery";
import GithubCvLinks from "@components/GithubCvLinks";
import TypeAnimationComp from "@components/TypeAnimationComp";

const HomePage: React.FC = () => {
  const isMobile = useMobile();

  return (
    <div className="flex_between w-full sm:gap-9 sm:flex-col flex_center">
      <div>
        <TypeAnimationComp />
        <h1 className="font-title text-[87px] leading-none font-dancingScript mb-4 sm:text-[32px] sm:leading-10 sm:text-center sm:m-0">
          I am Igor Stepanov,&nbsp;
          <br className="sm:hidden" />a creative
          <br /> Frontend Developer.
        </h1>
        {isMobile || <GithubCvLinks />}
      </div>
      <Image
        src="/assets/images/homepage.jpg"
        alt="homepage"
        width={600}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
};

export default HomePage;
