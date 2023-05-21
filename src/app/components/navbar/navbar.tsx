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
      document.getElementById("navbar")?.classList.add("bg-gradient-linear");
      document.getElementById("navbar")?.classList.add("backdrop-blur-xl");
    } else {
      document.getElementById("navbar")?.classList.remove("bg-gradient-linear");
      document.getElementById("navbar")?.classList.remove("backdrop-blur-xl");
    }
  }
  return (
    <nav
      id="navbar"
      className="fixed top-0 z-100 flex w-screen items-center justify-between px-6 py-0 
                    md:bg-gradient-linear md:px-14 md:py-2.5 md:pt-4  md:backdrop-blur-xl"
    >
      <Link href="/" passHref legacyBehavior scroll={false}>
        <a onClick={scrollToTop} className="hidden md:block">
          <Image
            src="/HA.svg"
            alt="Logo - Hasnat Amir"
            width={25}
            height={25}
          />
        </a>
      </Link>
      <Link href="/" passHref legacyBehavior scroll={false}>
        <a onClick={scrollToTop} className="block md:hidden">
          <Image
            src="/hasnatamir.svg"
            alt="Logo - Hasnat Amir"
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
