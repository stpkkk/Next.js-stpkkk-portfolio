import React from "react";
import { Guru } from "@public/assets/icons/Guru";
import { LaptopCoffeeBulb } from "@public/assets/icons/LaptopCoffeeBulb";

export const Meditation: React.FC = () => {
  return (
    <div className="flex_center relative w-[600px] h-[600px] bg-center bg-no-repeat bg-[url(../public/assets/icons/shape-1.svg)] md:w-[350px] md:h-[350px]">
      <div className="absolute translate-x-1/2 animate-[wiggle_15s_ease-in-out_infinite] sm:w-[200px]">
        <Guru />
      </div>
      <div className="absolute translate-x-1/2 animate-[wiggle_8s_ease-in-out_infinite] w-[400px] h-[250px] sm:w-[300px] sm:h-[220px]">
        <LaptopCoffeeBulb />
      </div>
    </div>
  );
};
