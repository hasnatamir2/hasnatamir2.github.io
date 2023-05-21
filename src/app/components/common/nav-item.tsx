"use client";
import React from "react";
import ScrollTo from "@/src/app/utils/scrollTo";

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
        className="text-lg capitalize after:mt-1 after:block after:h-0.5 after:w-2/4 after:bg-white 
        after:opacity-0 after:transition-all after:duration-300 after:ease-in-out 
        after:content-[''] hover:after:w-full hover:after:opacity-100"
      >
        {name}
      </a>
    </li>
  );
};

export default NavItem;
