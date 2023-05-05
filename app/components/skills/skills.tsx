"use client";
import React from "react";
import { TagCloudOptions } from "TagCloud";
import TagSphere from "@components/text-sphere/text-spere";
import { isMobile } from "react-device-detect";
import { skills, skillsContent } from "@/app/data/content";

const Skills = () => {
    return (
        <section
            id='skills'
            className='min-h-screen px-6 md:px-40 mt-10 md:mt-0 '
        >
            <div className='flex justify-between w-full md:flex-row	flex-col md:items-start items-center'>
                <div className='md:w-45%'>
                    <h2 className='text-4xl'>Skills</h2>
                    <p className='text-xl mt-4'>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: skillsContent.description,
                            }}
                        />
                    </p>
                </div>
                <TagSphere
                    options={(): TagCloudOptions => ({
                        radius: isMobile ? 175 : 350,
                        maxSpeed: "normal",
                        keep: true,
                    })}
                    onClick={(tag: string) => console.log(tag)}
                    onClickOptions={{ passive: true }}
                    className='md:-top-20 md:-right-16 md:relative'
                >
                    {skills}
                </TagSphere>
            </div>
        </section>
    );
};

export default Skills;
