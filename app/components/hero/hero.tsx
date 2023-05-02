"use client";
import Image from "next/image";
import React from "react";
import Button from "@components/common/button";
import RoundedButton from "../common/rounded-button";

const Hero = () => {
    return (
        <section
            id='hero'
            className='h-screen px-10 md:px-40 flex items-center justify-center flex-col'
        >
            <div className='flex items-center justify-between w-full md:flex-row flex-col-reverse'>
                <div className='my-12 md:my-0 md:text-left text-center'>
                    <h1 className='text-2 md:text-5.5xl pb-4'>
                        Hi, <br />
                        I’m Hasnat, <br />
                        Software Engineer
                    </h1>
                    <Button onClick={() => {}} text='Resume' />
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
            <RoundedButton onClick={() => {}}>
                <Image
                  src="/down-arrow.svg"
                  alt="Down Arrow"
                  width={10}
                  height={10}
                />
            </RoundedButton>
        </section>
    );
};

export default Hero;
