import React from "react";
import { Guru } from "@public/assets/icons/Guru";
import { LaptopCoffeeBulb } from "@public/assets/icons/LaptopCoffeeBulb";

export const Meditation: React.FC = () => {
  return (
    <div className="flex_center relative w-[600px] h-[600px] bg-center bg-no-repeat bg-[url(../public/assets/icons/shape-1.svg)] sm:w-[350px] sm:h-[350px]">
      <div className="absolute translate-x-1/2 animate-[wiggle_5s_ease-in-out_infinite] sm:w-[200px]">
        <Guru />
      </div>
      <div className="absolute translate-x-1/2 animate-[wiggle_3s_ease-in-out_infinite] w-[400px] h-[350px] sm:w-[300px] sm:h-[220px]">
        <LaptopCoffeeBulb />
      </div>
    </div>
  );
};
