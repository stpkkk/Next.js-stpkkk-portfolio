import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  url: string;
  target: string;
};

const Button: React.FC<Props> = ({ text, url, target }) => {
  return (
    <Link href={url} as={url} rel="noopener noreferrer" target={target}>
      <button className="btn btn-border-drawing" type="button">
        {text}
      </button>
    </Link>
  );
};

export default Button;
