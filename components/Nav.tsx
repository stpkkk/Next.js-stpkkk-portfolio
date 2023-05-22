import React, { useState } from "react";
import Link from "next/link";
import { useMobile } from "@hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SocialLinks } from "./SocialLinks";

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
    <div className="fixed flex_end flex-col z-10 w-screen h-screen bg-bgMobileNavMenu overflow-hidden ">
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
            className={`${
              pathname === link.path ? "text-secondary" : "text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto mb-20">
        <SocialLinks />
      </div>
    </div>
  ) : (
    <button
      onClick={handleToggleMobileMenu}
      type="button"
      className="focus:outline-none flex_end p-4"
    >
      <HiOutlineMenuAlt4 size={40} />
    </button>
  );
};

export const NavDesktop: React.FC = () => {
  return (
    <nav className="mx-auto max-w-[1600px] w-full font-light font-bree ">
      <ul className="fixed z-40 max-w-[1600px] mx-auto w-full top-0  px-32 flex_end flex-wrap gap-8 overflow-hidden backdrop-blur-2xl h-20 bg-black/5 ">
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
  const isMobile = useMobile();
  return isMobile ? <NavMobile /> : <NavDesktop />;
};

export default Nav;
