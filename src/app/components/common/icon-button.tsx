import React, { ReactNode } from "react";
import Image from "next/image";

interface ButtonProps {
  index: string;
  href: string;
  icon: string;
}

const IconButton = ({ index, icon, href }: ButtonProps) => {
  return (
    <a
      key={index}
      className="bg-blur-xl rounder-lg duration-250 ease flex h-14 w-14
            items-center justify-center rounded bg-gradient-linear text-2xl transition hover:text-4xl"
      href={href}
      target="_blank"
    >
      <Image src={`/${icon}.svg`} alt={index} width={20} height={20} />
    </a>
  );
};

export default IconButton;
