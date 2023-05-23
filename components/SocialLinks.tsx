import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsFiletypePdf } from "react-icons/bs";

const links = [
  {
    path: "https://github.com/stpkkk",
    image: <BsGithub size={30} />,
  },
  {
    path: "https://www.linkedin.com/in/igor-stepanov1",
    image: <BsLinkedin size={30} />,
  },
  { path: "/contact", image: <AiOutlineMail size={30} /> },
];

export const SocialLinks: React.FC = () => {
  const onClick = () => {
    fetch("Stepanov-Igor-CV.pdf").then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Stepanov-Igor-CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="flex_center space-x-6 text-primary pb-10 ">
      <ul className="flex_center space-x-6">
        {links.map(link => (
          <Link
            key={link.path}
            href={link.path}
            target="blank"
            className="hover:text-secondary"
          >
            <li>{link.image}</li>
          </Link>
        ))}
      </ul>
      <button onClick={onClick} className="hover:text-secondary" type="button">
        <BsFiletypePdf size={30} />
      </button>
    </div>
  );
};
