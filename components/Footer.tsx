"use client";
import React from "react";
import SocialLinks from "./SocialLinks";
import { useMediaQuery } from "@hooks";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="absolute h-20 w-full bottom-0 sm:hidden">
      {isMobile || <SocialLinks />}
    </div>
  );
};

export default Footer;
