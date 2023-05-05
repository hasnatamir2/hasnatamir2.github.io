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
        <nav className='flex justify-between items-center fixed w-screen top-0 px-6 py-2.5 z-100
                        md:px-14 md:pt-4 md:bg-gradient-linear md:backdrop-blur-xl'>
            <Link href='/' passHref legacyBehavior scroll={false}>
                <a onClick={scrollToTop} className='hidden md:block'>
                    <Image
                        src='/HA.svg'
                        alt='Logo - Hasnat Amir'
                        width={25}
                        height={25}
                    />
                </a>
            </Link>
            <Link href='/' passHref legacyBehavior scroll={false}>
                <a onClick={scrollToTop} className='md:hidden block'>
                    <Image
                        src='/hasnatamir.svg'
                        alt='Logo - Hasnat Amir'
                        width={100}
                        height={25}
                    />
                </a>
            </Link>
            <NavMenu />
        </nav>
    );
};

export default Navbar;
