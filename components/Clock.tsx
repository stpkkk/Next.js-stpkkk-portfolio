'use client';
import React, { useState, useEffect } from 'react';

interface ClockProps {
  size?: number;
}

const Clock: React.FC<ClockProps> = ({ size = 100 }) => {
  const [date, setDate] = useState(new Date());
  const [hydrated, setHydrated] = React.useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [date]);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const viewBoxSize = size + 20;
  const center = viewBoxSize / 2;

  return (
    <svg
      width={100}
      height={50}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize + 20}`}
      xmlns='http://www.w3.org/2000/svg'
      className='bg-black sm:w-[70px] sm:h-[40px]'
    >
      <text
        x={center}
        y={center}
        textAnchor='middle'
        fontSize='50'
        fontWeight='bold'
        fill='#fff'
        className='font-ubuntu tracking-wide w-full sm:text-[40px]'
      >
        {date.toLocaleTimeString()}
      </text>
      <text
        x={center}
        y={viewBoxSize}
        textAnchor='middle'
        fontSize='32'
        fontWeight='bold'
        fill='#fff'
        className='font-ubuntu tracking-wide w-full sm:text-[28px]'
      >
        {date.toLocaleDateString()}
      </text>
    </svg>
  );
};

export default Clock;
