import React from "react";
import Image from "next/image";
import TypeAnimationComp from "@components/TypeAnimationComp";
import { Clock } from "@components/Clock";

const HomePage: React.FC = () => {
  return (
    <div className="page_wrapper md:flex-col sm:justify-center sm:flex-wrap sm:h-[calc(100vh-72px)] overflow-auto">
      <div className="font-dancingScript text-xl md:text-sm sm:mb-0 sm:p-2 md:text-center">
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
        <h1 className="head_text sm:text-center m-0 sm:text-[42px]">
          I am Igor Stepanov,&nbsp;
          <br className="sm:hidden" />a creative
          <br /> Frontend Developer.
        </h1>
      </div>
      <div className="relative basis-[40%]">
        <Image
          src="/assets/images/homepage.jpg"
          alt="homepage"
          width={550}
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
