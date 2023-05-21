"use client";
import React from "react";
import { TagCloudOptions } from "TagCloud";
import TagSphere from "@/src/app/components/text-sphere/text-spere";
import { isMobile } from "react-device-detect";
import { skills, skillsContent } from "@/src/app/data/content";

const Skills = () => {
  return (
    <section id="skills" className="mt-10 min-h-screen px-6 md:mt-0 md:px-40 ">
      <div className="flex w-full flex-col items-center	justify-between md:flex-row md:items-start">
        <div className="md:w-45%">
          <h2 className="text-4xl">Skills</h2>
          <p className="mt-4 text-xl">
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
          className="md:relative md:-right-16 md:-top-20"
        >
          {skills}
        </TagSphere>
      </div>
    </section>
  );
};

export default Skills;
