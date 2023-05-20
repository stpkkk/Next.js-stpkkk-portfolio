import React, { useState, useEffect } from "react";

interface ClockProps {
  size?: number;
}

export const Clock: React.FC<ClockProps> = ({ size = 100 }) => {
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
  const seconds = formatDigits(time.getSeconds());

  const viewBoxSize = size + 20;
  const center = viewBoxSize / 2;

  return (
    <svg
      width={100}
      height={50}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize + 20}`}
      xmlns="http://www.w3.org/2000/svg"
      className="bg-black"
    >
      <text
        x={center}
        y={center}
        textAnchor="middle"
        fontSize="50"
        fontWeight="bold"
        fill="#fff"
        className="font-bree tracking-wide w-full"
      >
        {`${hours}:${minutes}:${seconds}`}
      </text>
      <text
        x={center}
        y={viewBoxSize}
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="#fff"
        className="font-bree tracking-wide w-full"
      >
        {formattedDate}
      </text>
    </svg>
  );
};
