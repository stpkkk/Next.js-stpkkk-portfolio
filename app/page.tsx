import React from "react";
import Image from "next/image";
import TypeAnimationComp from "@components/TypeAnimationComp";
import { Clock } from "@components/Clock";

const HomePage: React.FC = () => {
  return (
    <div className="page_wrapper sm:gap-10">
      <div className="flex-1 font-dancingScript md:text-center sm:flex-none">
        <div className="text-2xl sm:text-xl">
          <TypeAnimationComp
            sequence={[
              "Hello World",
              4000,
              "",
              1000,
              "This Is My Portfolio",
              4000,
            ]}
          />
        </div>
        <h1 className="head_text m-0  sm:text-[42px] ">
          I am Igor Stepanov,&nbsp;
          <br className="md:hidden" />a creative
          <br /> Frontend Developer.
        </h1>
      </div>
      <div className="relative">
        <Image
          src="/assets/images/homepage.jpg"
          alt="homepage"
          width={520}
          height={400}
          className="w-full h-auto rounded-lg"
          quality={100}
          priority
        />
        <div className="absolute top-[30px] left-[30px] sm:left-[14px] sm:top-[14px]">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
