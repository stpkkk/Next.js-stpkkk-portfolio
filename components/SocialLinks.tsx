import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsGithub,
  BsLinkedin,
  BsFiletypePdf,
  BsTelegram,
} from "react-icons/bs";

const links = [
  {
    path: "https://t.me/stpkk",
    image: <BsTelegram size={30} />,
  },
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
    fetch("Степанов-Игорь-Резюме.pdf").then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Степанов-Игорь-Резюме.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="flex_end max-w-[1600px] mx-auto space-x-6 text-primary sm:text-black pb-10 sm:dark:text-primary">
      <ul className="flex_center space-x-6">
        {links.map(link => (
          <Link
            as={link.path}
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
