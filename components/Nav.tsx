"use client";
import React, { useState } from "react";
import Link from "next/link";
import useMediaQuery from "@hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "@components/ThemeToggle";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/my-projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

export const NavMobile: React.FC = () => {
  const [isMobileMenu, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return isMobileMenu ? (
    <div className="fixed flex_end flex-col z-10 w-screen h-screen dark:bg-bgMobileNavMenu bg-primary overflow-auto touch-auto">
      <button
        className="flex ml-auto p-4 focus:text-secondary focus:outline-none"
        onClick={handleToggleMobileMenu}
        type="button"
      >
        <AiOutlineCloseCircle size={40} />
      </button>
      <nav className="flex_center flex-col gap-2 text-4xl mx-auto font-bree relative top-1/4 -translate-y-1/2">
        {navLinks.map(link => (
          <Link
            key={link.path}
            href={link.path}
            as={link.path}
            className={`${
              pathname === link.path ? "text-secondary" : "dark:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto mb-20 text-black dark:text-primary">
        <SocialLinks />
      </div>
    </div>
  ) : (
    <div className="flex_between p-4 dark:bg-bgContainer bg-white flex_end text-black dark:text-primary">
      <ThemeToggle />
      <button
        onClick={handleToggleMobileMenu}
        type="button"
        className="focus:outline-none"
      >
        <HiOutlineMenuAlt4 size={40} />
      </button>
    </div>
  );
};

export const NavDesktop: React.FC = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-20 flex_between items-center max-w-[1600px] w-full px-16 font-bold font-bree backdrop-blur-2xl bg-black/2">
      <div className="relative">
        <ThemeToggle />
      </div>
      <ul className="top-0 flex items-center gap-8 h-20">
        {navLinks.map(link => (
          <Link
            key={link.path}
            href={link.path}
            as={link.path}
            className="hover:text-secondary"
          >
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const Nav: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <NavMobile /> : <NavDesktop />;
};

export default Nav;
