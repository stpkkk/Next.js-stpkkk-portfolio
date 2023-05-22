"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type TypeAnimationProps = {
  sequence: (string | number)[];
};

const TypeAnimationComp: React.FC<TypeAnimationProps> = ({ sequence }) => {
  return <TypeAnimation sequence={sequence} repeat={Infinity} />;
};

export default TypeAnimationComp;
