import React from "react";
import Image from "next/image";
import TypeAnimationComp from "@components/TypeAnimationComp";
import { Clock } from "@components/Clock";

const HomePage: React.FC = () => {
  return (
    <div className="page_wrapper sm:flex-col sm:justify-center sm:gap-10 sm:h-[calc(100vh-70px)]">
      <div className="flex-1 font-dancingScript text-xl sm:text-sm sm:mb-0 sm:p-2 sm:text-center">
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
        <h1 className="head_text sm:text-center m-0">
          I am Igor Stepanov,&nbsp;
          <br className="sm:hidden" />a creative
          <br /> Frontend Developer.
        </h1>
      </div>
      <div className="relative basis-[40%]">
        <Image
          src="/assets/images/homepage.jpg"
          alt="homepage"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
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
