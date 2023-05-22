import React from "react";
import Image from "next/image";
import TypeAnimationComp from "@components/TypeAnimationComp";
import { Clock } from "@components/Clock";

const HomePage: React.FC = () => {
  return (
    <div className="page_wrapper pb-20 px-32 flex_between w-full sm:gap-9 sm:flex-col flex_center">
      <div className="sm:p-2 ">
        <TypeAnimationComp />
        <h1 className="head_text sm:text-center sm:m-0">
          I am Igor Stepanov,&nbsp;
          <br className="sm:hidden" />a creative
          <br /> Frontend Developer.
        </h1>
      </div>
      <div className="relative">
        <Image
          src="/assets/images/homepage.jpg"
          alt="homepage"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg sm:rounded-none"
          priority
        />
        <div className="absolute top-[63px] left-[60px] sm:left-[14px] sm:top-[14px]">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
