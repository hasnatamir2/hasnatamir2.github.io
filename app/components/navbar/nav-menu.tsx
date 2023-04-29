"use client";
import React from "react";
import NavItem from "../common/nav-item";

const MENUITEMS = [
    {
        name: "Portfolio",
        link: "#portfolio",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

const NavMenu = () => {
    return (
        <>
            <div className='hidden sm:block'>
                <ul className='flex justify-between items-center space-x-4'>
                    {MENUITEMS.map((item, index) => (
                        <NavItem
                            key={index}
                            name={item.name}
                            link={item.link}
                        />
                    ))}
                </ul>
            </div>
            <div className='block sm:hidden'>
                
            </div>
        </>
    );
};

export default NavMenu;
