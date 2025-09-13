"use client";
import Image from "next/image";
import React from "react";
import Button from "@/src/app/components/common/button";
import RoundedButton from "../common/rounded-button";
import { mainHeading } from "@/src/app/data/content";
import ScrollTo from "@/src/app/utils/scrollTo";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col items-center justify-center px-6 md:px-40"
    >
      <div className="flex w-full flex-col-reverse items-center justify-between md:flex-row">
        <div className="my-12 text-center md:my-0 md:text-left">
          <h1 className="pb-4 text-2 md:text-5.5xl">
            <div
              dangerouslySetInnerHTML={{
                __html: mainHeading.title,
              }}
            />
          </h1>
          <Button
            href={
              "https://drive.google.com/file/d/1mCzbiCb007_q9CVNEbh1ClC2YR1Kk_bU/view?usp=share_link"
            }
            text="Resume"
          />
        </div>
        <div>
          <Image
            src="/computer-setup.png"
            alt="Hero"
            width={500}
            height={500}
            className="w-52"
          />
        </div>
      </div>
      <RoundedButton onClick={() => ScrollTo("#portfolio")}>
        <Image src="/down-arrow.svg" alt="Down Arrow" width={10} height={10} />
      </RoundedButton>
    </section>
  );
};

export default Hero;
