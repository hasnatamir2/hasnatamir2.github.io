"use client";
import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <span className="inline-flex cursor-pointer">
      <a
        className=" ease after:ease hover:after:ease rounded px-1 text-sm capitalize transition-all
                duration-300 after:relative after:left-0 after:mt-2 after:block after:h-0 after:w-2/4 after:origin-top after:rotate-180 after:bg-white after:p-0.5	after:transition-all after:duration-300
                after:content-[''] hover:text-white hover:after:-left-1 hover:after:-z-10 hover:after:h-full hover:after:w-115% hover:after:rounded hover:after:bg-gradient-linear-color hover:after:transition-all hover:after:duration-300"
        href={href}
        target="_blank"
      >
        {text}
      </a>
    </span>
  );
};

export default Button;
