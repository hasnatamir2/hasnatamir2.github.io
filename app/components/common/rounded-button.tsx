import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const RoundedButton = ({ children, onClick }: ButtonProps) => {
    return (
        <a
            onClick={onClick}
            className='group inline-flex py-4 px-5 rounded-full border cursor-pointer overflow-hidden
            hover:opacity-50 '
        >
            <span className='group-hover:animate-top-to-bottom'>
                {children}
            </span>
        </a>
    );
};

export default RoundedButton;
