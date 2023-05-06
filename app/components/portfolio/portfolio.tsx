"use client";
import React from "react";
import Button from "@components/common/button";
import ProjectCard from "@components/common/project-card";
import { openSource, projects } from "@/app/data/content";

interface IRepository {
    name: string;
    url: string;
    tools: string[];
    description: string;
    image: string;
}

const Portfolio = () => {
    return (
        <section id='portfolio' className='min-h-screen px-6 md:px-40'>
            <div className='flex justify-between w-full'>
                <h2 className='text-4xl'>Portfolio</h2>
                <Button
                    href={`https://github.com/${openSource.githubUserName}`}
                    text='See more'
                />
            </div>
            <p className='text-xl mt-4 md:w-6/12'>
                A small gallery of recent projects done all together with
                amazing people around the globe.
            </p>
            <div className='grid md:grid-cols-3 gap-6 md:mt-16 mt-8'>
                {projects.length > 0 ? (
                    projects.map((repo: IRepository, index: number) => (
                        <ProjectCard
                            key={index}
                            title={repo.name}
                            tools={repo.tools}
                            description={repo.description}
                            image={repo.image}
                            url={repo.url}
                        />
                    ))
                ) : (
                    <p className='text-white text-xl text-center'>
                        Nothing to show here
                    </p>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
