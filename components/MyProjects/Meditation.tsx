import React from "react";
import { Guru } from "@public/assets/icons/Guru";
import { LaptopCoffeeBulb } from "@public/assets/icons/LaptopCoffeeBulb";

export const Meditation: React.FC = () => {
  return (
    <div className="relative ">
      <div className="absolute top-1/4 flex_center animate-[wiggle_5s_ease-in-out_infinite]">
        <Guru />
      </div>
      <div className="absolute -left-[60%] sm:-left-[57%] animate-[wiggle_4s_ease-in-out_infinite]">
        <LaptopCoffeeBulb />
      </div>
      <object
        data="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg3IiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDQ4NyA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgb3BhY2l0eT0iMC43OSI+CiAgICA8cGF0aCBkPSJNMjMzLjI4MSAzNTUuODU2QzMzOC40ODcgMzM5LjQyNCA1NjEuMTUgMjk2LjcwMSA0NjIuMjgyIDE2MS40MTFDMzMwLjg4MSAtMTguNzkzMSAzMTguMDY5IDE2MS40MTEgMjA1LjM5NiAxMC43ODQ1Qzk2LjM4OCAtODAuMTM5MSAtMTM4Ljk1MSA0MzUuMjc3IDExMC43NTMgMzgyLjE0N0MxMjcuNjU0IDM3OC4zMTMgMTk1LjI1NSAzNjEuMzMzIDIzMy4yODEgMzU1Ljg1NloiIGZpbGw9IiM5QzZDRkUiLz4KICAgIDxwYXRoIGQ9Ik0yMjkuMDE5IDM4MS43OTNDMzIxLjQ3OSAzNjUuODcyIDUxNy4xNjYgMzI0LjQ3NyA0MzAuMjc2IDE5My4zOTNDMzE0Ljc5NSAxOC43OTEyIDMwMy41MzUgMTkzLjM5MyAyMDQuNTEyIDQ3LjQ0OTJDMTA4LjcxIC00MC42NDc3IC05OC4xMTcxIDQ1OC43NDUgMTIxLjMzNSA0MDcuMjY3QzEzNi4xODggNDAzLjU1MiAxOTUuNiAzODcuMSAyMjkuMDE5IDM4MS43OTNaIiBmaWxsPSIjMzUyQ0FCIi8+CiAgICA8cGF0aCBkPSJNMjI2Ljg1OCAzOTMuNzZDMzEwLjY3NyAzNzkuNDU3IDQ4OC4wNzYgMzQyLjI2OCA0MDkuMzA3IDIyNC41MDNDMzA0LjYxOCA2Ny42NDEzIDI5NC40MSAyMjQuNTAzIDIwNC42NDEgOTMuMzg3NUMxMTcuNzkzIDE0LjI0MTYgLTY5LjcwNDQgNDYyLjg5NCAxMjkuMjM4IDQxNi42NDZDMTQyLjcwMyA0MTMuMzA4IDE5Ni41NjIgMzk4LjUyOCAyMjYuODU4IDM5My43NloiIGZpbGw9IiM3RUU2QzciLz4KICA8L2c+Cjwvc3ZnPgo="
        type="image/svg+xml"
      />
    </div>
  );
};
