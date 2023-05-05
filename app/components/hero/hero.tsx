"use client";
import Image from "next/image";
import React from "react";
import Button from "@components/common/button";
import RoundedButton from "../common/rounded-button";
import { mainHeading } from "@/app/data/content";
import ScrollTo from "@/app/utils/scrollTo";

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
                    <Button href={'mainHeading'} text='Resume' />
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
            <RoundedButton onClick={() => ScrollTo('#portfolio')}>
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
