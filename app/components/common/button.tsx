"use client";
import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <span onClick={onClick} className='inline-flex'>
            <a
                className="py-4 px-2 capitalize text-sm rounded transition-all duration-300 ease after:relative
                after:content-[''] after:block after:w-2/4 after:h-0 after:bg-white after:mt-2 after:transition-all after:duration-300 after:ease after:rotate-180 after:origin-top	after:p-0.5 after:left-0
                hover:text-white hover:after:h-full hover:after:w-115% hover:after:bg-gradient-linear-color hover:after:-z-10 hover:after:rounded hover:after:-left-1 hover:after:transition-all hover:after:duration-300 hover:after:ease"
            >
                {text}
            </a>
        </span>
    );
};

export default Button;
