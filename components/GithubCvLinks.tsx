import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";

const GithubCvLinks: React.FC = () => {
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
    <div className="flex gap-4">
      <a
        href="https://github.com/stpkkk"
        target="blank"
        className="hover:text-secondary"
      >
        <BsGithub size={30} />
      </a>
      <button onClick={onClick} className="hover:text-secondary" type="button">
        <BsFiletypePdf size={30} />
      </button>
    </div>
  );
};

export default GithubCvLinks;
