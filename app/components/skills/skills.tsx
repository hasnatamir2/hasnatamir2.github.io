"use client";
import React from "react";
import { TagCloudOptions } from "TagCloud";
import TagSphere from "@components/text-sphere/text-spere";
import { isMobile } from "react-device-detect";

const Skills = () => {
    return (
        <section id='skills' className='min-h-screen px-10 md:px-40 mt-10 md:mt-0 '>
            <div className='flex justify-between w-full md:flex-row	flex-col md:items-start items-center' >
                <div className="md:w-45%">
                    <h2 className='text-4xl'>Skills</h2>
                    <p className='text-xl mt-4'>
                        I have worked with a wide range of technologies in the
                        web/mobile development world. From <code>back-end</code>
                        to <code>front-end</code> to <code>android/ios</code>{" "}
                        and everything in between. I have experience with many
                        different software design pattern and architectures like{" "}
                        <code>domain driven design</code>,<code>SOLID</code>,{" "}
                        <code>12 factor app</code>,
                        <code>clean code architecture</code>,{" "}
                        <code>hexagonal architecture</code>.
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
                    className="md:-top-16 md:-right-16 md:relative"
                >
                    {[
                        "HTML",
                        "CSS",
                        "SASS/LESS",
                        "JavaScript",
                        "Typescript",
                        "React",
                        "Redux",
                        "NodeJS",
                        "Express",
                        "Babel",
                        "Jquery",
                        "GitHub",
                        "Webpack",
                        "Vite",
                        "WebSocket",
                        "WebHooks",
                        "GraphQL",
                        "GCP",
                        "AWS",
                        "Tailwind",
                        "Ant Design",
                        "Bootstrap",
                        "Material UI",
                        "Jest/Cypress",
                        "MongoDB",
                        "MySQL",
                        "Moongose",
                        "PostgreSQL",
                        "Sequelize",
                        "Prisma",
                        "Docker",
                        "Kubernetes",
                        "Nginx/Caddy",
                        "React Native",
                        "NextJs",
                    ]}
                </TagSphere>
            </div>
        </section>
    );
};

export default Skills;
