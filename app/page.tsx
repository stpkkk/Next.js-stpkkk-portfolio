import React from "react";
import Image from "next/image";
import { Clock, TypeAnimationComp } from "@components";

const HomePage: React.FC = () => {
  return (
    <div className="page_wrapper sm:gap-10">
      <div className="flex-1 font-amatic md:text-center sm:flex-none">
        <div className="flex_start text-2xl sm:text-xl">
          <TypeAnimationComp
            sequence={[
              "Привет, мир!",
              4000,
              "",
              1000,
              "Это мое портфолио!",
              4000,
            ]}
          />
        </div>
        <h1 className="head_text m-0  sm:text-[42px] ">
          Меня зовут Игорь Степанов,&nbsp;
          <br />я Фронтенд-разработчик.
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
