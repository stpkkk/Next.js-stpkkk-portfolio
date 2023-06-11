import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@data/nav";

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
