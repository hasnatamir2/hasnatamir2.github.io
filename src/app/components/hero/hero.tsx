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
            id='hero'
            className='h-screen px-6 md:px-40 flex items-center justify-center flex-col'
        >
            <div className='flex items-center justify-between w-full md:flex-row flex-col-reverse'>
                <div className='my-12 md:my-0 md:text-left text-center'>
                    <h1 className='text-2 md:text-5.5xl pb-4'>
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
                        text='Resume'
                    />
                </div>
                <div>
                    <Image
                        src='/computer-setup.svg'
                        alt='Hero'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <RoundedButton onClick={() => ScrollTo("#portfolio")}>
                <Image
                    src='/down-arrow.svg'
                    alt='Down Arrow'
                    width={10}
                    height={10}
                />
            </RoundedButton>
        </section>
    );
};

export default Hero;
