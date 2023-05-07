import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationComp: React.FC = () => {
  return (
    <div className="font-dancingScript mb-4 text-lg sm:text-sm sm:mb-0">
      <TypeAnimation
        sequence={[
          "⚪⚪⚪ Hello World",
          4000,
          "",
          1000,
          "⚪⚪⚪ This Is My Portfolio",
          4000,
        ]}
        speed={40}
        wrapper={"span"}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeAnimationComp;
