import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@data";
import { usePathname } from "next/navigation";

const NavDesktop: React.FC = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="fixed left-1/2 -translate-x-1/2 z-20 flex_between items-center max-w-[1600px] w-full px-16 font-bold font-bree backdrop-blur-2xl bg-black/2">
        <div className="relative flex_center gap-10">
          <ThemeToggle />
          {/* <Link
            href={`https://next-js-stpkkk-portfolio-git-ru-igorstepanov.vercel.app${pathname}`}
            className="hover:text-secondary"
            as={`https://next-js-stpkkk-portfolio-git-ru-igorstepanov.vercel.app${pathname}`}
          >
            RU
          </Link> */}
        </div>
        <ul className="top-0 flex items-center gap-8 h-20">
          {navLinks.map(link => (
            <Link
              key={link.path}
              href={link.path}
              as={link.path}
              className={`${
                pathname === link.path ? "text-secondary" : "dark:text-primary"
              }`}
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavDesktop;
