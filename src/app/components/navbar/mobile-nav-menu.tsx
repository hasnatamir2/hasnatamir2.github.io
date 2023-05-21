import React from "react";
import ScrollTo from "@/src/app/utils/scrollTo";
import Image from "next/image";

type MenuItem = {
  name: string;
  link: string;
};

interface MobileNavMenuProps {
  items: MenuItem[];
  close: () => void;
}

const MobileNavMenu = ({ items, close }: MobileNavMenuProps) => {
  return (
    <div
      className="fixed left-0 top-0 z-100 h-screen w-screen translate-x-0 
    translate-y-0 bg-light-black backdrop-blur-xl"
    >
      <span
        onClick={close}
        className="absolute right-4 top-4 cursor-pointer bg-black"
      >
        <Image
          src="/close.svg"
          alt="Logo - Hasnat Amir"
          width={40}
          height={40}
        />
      </span>
      <ul className="relative top-1/3 flex flex-col items-center justify-center space-y-8">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                ScrollTo(item.link);
                close();
              }}
              className="text-lg capitalize after:mt-1 after:block after:h-0.5 after:w-2/4 
              after:bg-white after:opacity-0 after:transition-all after:duration-300 
              after:ease-in-out after:content-[''] hover:after:w-full hover:after:opacity-100"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavMenu;
