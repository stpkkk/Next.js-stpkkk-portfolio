import React from "react";
import Link from "next/link";
import { useMobile } from "@hooks/useMediaQuery";
import { FaHamburger } from "react-icons/fa";
import GithubCvLinks from "./GithubCvLinks";

export const NavMobile = () => {
  return (
    <div className="flex_between flex-row-reverse">
      <button type="button">
        <FaHamburger size={30} />
      </button>
      <GithubCvLinks />
    </div>
  );
};

export const NavDesktop = () => {
  return (
    <nav className="w-full flex_end flex-wrap gap-4 py-2 mb-16 font-light font-bree">
      <Link href={"/"} as="/" className="hover:text-[#e4c341]">
        Home
      </Link>
      <Link href={"/about"} as="/about" className="hover:text-[#e4c341]">
        About
      </Link>
      <Link href={"/projects"} as="/projects" className="hover:text-[#e4c341]">
        Projects
      </Link>
      <Link href={"/contact"} as="/contact" className="hover:text-[#e4c341]">
        Contact
      </Link>
    </nav>
  );
};

const Nav: React.FC = () => {
  const isMobile = useMobile();
  return isMobile ? <NavMobile /> : <NavDesktop />;
};

export default Nav;
