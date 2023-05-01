"use client";
import { FC, MouseEvent } from "react";
import Image from "next/image";
import NavMenu from "./nav-menu";
import Link from "next/link";

const Navbar: FC = () => {
    const scrollToTop = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <nav className='flex justify-between items-center fixed w-screen top-0	px-14 py-2.5 pt-4 bg-gradient-linear backdrop-blur-xl'>
            <Link href='/' passHref legacyBehavior scroll={false}>
                <a onClick={scrollToTop}>
                    <Image
                        src='/HA.svg'
                        alt='Logo - Hasnat Amir'
                        width={25}
                        height={25}
                    />
                </a>
            </Link>
            <NavMenu />
        </nav>
    );
};

export default Navbar;
