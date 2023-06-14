"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@data/nav";
import Link from "next/link";
import { SocialLinks } from "@components/SocialLinks";
import { ThemeToggle } from "./ThemeToggle";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

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
      <nav className="flex_center flex-col gap-2 text-5xl mx-auto font-amatic relative top-1/4 -translate-y-1/2">
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
      <div className="relative flex_center gap-10 font-amatic text-[24px]">
        <ThemeToggle />
        <Link href={`https://next-js-stpkkk-portfolio.vercel.app${pathname}`}>
          EN
        </Link>
      </div>
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
