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
        <div className='fixed translate-x-0 translate-y-0 left-0 top-0 w-screen h-screen bg-light-black backdrop-blur-xl z-100'>
            <span
                onClick={close}
                className='absolute top-4 right-4 cursor-pointer bg-black'
            >
                <Image
                    src='/close.svg'
                    alt='Logo - Hasnat Amir'
                    width={40}
                    height={40}
                />
            </span>
            <ul className='flex flex-col justify-center items-center space-y-8 top-1/3 relative'>
                {items.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.link}
                            onClick={(e) => {
                                e.preventDefault();
                                ScrollTo(item.link);
                                close();
                            }}
                            className="text-lg capitalize after:content-[''] after:block after:w-2/4 after:h-0.5 after:mt-1 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:opacity-0 hover:after:opacity-100 hover:after:w-full"
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
