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
            className='flex items-center justify-center w-14 h-14 bg-gradient-linear bg-blur-xl
            rounder-lg text-2xl rounded transition duration-250 ease hover:text-4xl'
            href={href}
            target='_blank'
        >
            <Image src={`/${icon}.svg`} alt={index} width={20} height={20} />
        </a>
    );
};

export default IconButton;
