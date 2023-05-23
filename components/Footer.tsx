"use client";
import React from "react";
import { SocialLinks } from "./SocialLinks";
import { useMobile } from "@hooks/useMediaQuery";

export const Footer: React.FC = () => {
  const isMobile = useMobile();
  return (
    <div className="absolute h-20 w-full bottom-0 sm:hidden">
      {isMobile || <SocialLinks />}
    </div>
  );
};
