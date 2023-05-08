import React, { useState } from "react";
import Link from "next/link";
import { useMobile } from "@hooks/useMediaQuery";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import GithubCvLinks from "./GithubCvLinks";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

export const NavMobile: React.FC = () => {
  const [isMobileMenu, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return isMobileMenu ? (
    <div className="absolute z-10 w-screen h-screen bg-bgMobileNavMenu">
      <button
        className="flex ml-auto p-4 hover:text-secondary focus:outline-none"
        onClick={handleToggleMobileMenu}
        type="button"
      >
        <AiOutlineCloseCircle size={30} />
      </button>
      <nav className="flex_center flex-col gap-2 text-4xl mx-auto font-bree relative top-1/4 -translate-y-1/2">
        {navLinks.map(link => (
          <Link
            key={link.path}
            href={link.path}
            as={link.path}
            className="hover:text-secondary"
            onClick={handleLinkClick}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  ) : (
    <div className="flex_between flex-row-reverse p-4">
      <button
        onClick={handleToggleMobileMenu}
        type="button"
        className="focus:outline-none"
      >
        <FaHamburger size={30} />
      </button>
      <GithubCvLinks />
    </div>
  );
};

export const NavDesktop: React.FC = () => {
  return (
    <nav className="w-full flex_end flex-wrap gap-4 py-2 mb-16 font-light font-bree">
      {navLinks.map(link => (
        <Link
          key={link.path}
          href={link.path}
          as={link.path}
          className="hover:text-secondary"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

const Nav: React.FC = () => {
  const isMobile = useMobile();
  return isMobile ? <NavMobile /> : <NavDesktop />;
};

export default Nav;
