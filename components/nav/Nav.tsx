"use client";
import React from "react";
import { useMediaQuery } from "@hooks";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Nav: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <NavMobile /> : <NavDesktop />;
};

export default Nav;
