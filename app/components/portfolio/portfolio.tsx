"use client";
import React from "react";
import Button from "@components/common/button";
import ProjectCard from "@components/common/project-card";

const Portfolio = () => {
    return (
        <section
            id='portfolio'
            className='h-screen px-10 md:px-40'
        >
            <div className='flex justify-between w-full'>
                <h2 className='text-4xl'>Portfolio</h2>
                <Button onClick={() => {}} text='See more' />
            </div>
            <p className="text-xl mt-4 md:w-6/12">
                A small gallery of recent projects done all together with
                amazing people around the globe.
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:mt-16 mt-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
};

export default Portfolio;
