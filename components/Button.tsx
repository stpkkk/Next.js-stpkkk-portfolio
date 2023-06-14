import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  url: string;
  target: string;
};

export const Button: React.FC<Props> = ({ text, url, target }) => {
  return (
    <Link
      href={url}
      as={url}
      rel="noopener noreferrer"
      target={target}
    >
      <button className="btn btn-border-drawing" type="button">
        {text}
      </button>
    </Link>
  );
};
