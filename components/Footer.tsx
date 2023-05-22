"use client";
import React from "react";
import { SocialLinks } from "./SocialLinks";
import { useMobile } from "@hooks/useMediaQuery";

export const Footer: React.FC = () => {
  const isMobile = useMobile();
  return (
    <div className="absolute h-14 w-full bottom-2">
      {isMobile || <SocialLinks />}
    </div>
  );
};
