"use client";
import React from "react";
import ScrollTo from "@/app/utils/scrollTo";

interface NavItemProps {
    index: string;
    name: string;
    link: string;
}

const NavItem = ({ index, name, link }: NavItemProps) => {
    return (
        <li key={index}>
            <a
                href={link}
                onClick={(e) => {
                    e.preventDefault();
                    ScrollTo(link);
                }}
                className="text-lg capitalize after:content-[''] after:block after:w-2/4 after:h-0.5 after:mt-1 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:opacity-0 hover:after:opacity-100 hover:after:w-full"
            >
                {name}
            </a>
        </li>
    );
};

export default NavItem;
