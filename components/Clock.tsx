"use client";
import React, { useState, useEffect } from "react";

interface ClockProps {
  size?: number;
}

const Clock: React.FC<ClockProps> = ({ size = 100 }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const formatDigits = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const hours = formatDigits(time.getHours());
  const minutes = formatDigits(time.getMinutes());

  const viewBoxSize = size + 20;
  const center = viewBoxSize / 2;

  return (
    <svg
      width={100}
      height={50}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize + 20}`}
      xmlns="http://www.w3.org/2000/svg"
      className="bg-black sm:w-[70px] sm:h-[40px]"
    >
      <text
        x={center}
        y={center}
        textAnchor="middle"
        fontSize="50"
        fontWeight="bold"
        fill="#fff"
        className="font-ubuntu tracking-wide w-full sm:text-[40px]"
      >
        {`${hours}:${minutes}`}
      </text>
      <text
        x={center}
        y={viewBoxSize}
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="#fff"
        className="font-ubuntu tracking-wide w-full sm:text-[28px]"
      >
        {formattedDate}
      </text>
    </svg>
  );
};

export default Clock;
