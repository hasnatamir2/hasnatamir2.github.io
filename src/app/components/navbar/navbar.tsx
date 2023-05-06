"use client";
import { FC, MouseEvent, useEffect } from "react";
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

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, []);

    // window.onscroll = function () {
    //     scrollFunction();
    // };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document
                .getElementById("navbar")
                ?.classList.add("bg-gradient-linear");
            document
                .getElementById("navbar")
                ?.classList.add("backdrop-blur-xl");
        } else {
            document
                .getElementById("navbar")
                ?.classList.remove("bg-gradient-linear");
            document
                .getElementById("navbar")
                ?.classList.remove("backdrop-blur-xl");
        }
    }
    return (
        <nav
            id='navbar'
            className='flex justify-between items-center fixed w-screen top-0 px-6 py-0 z-100 
                    md:bg-gradient-linear md:backdrop-blur-xl md:px-14 md:pt-4  md:py-2.5'
        >
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
