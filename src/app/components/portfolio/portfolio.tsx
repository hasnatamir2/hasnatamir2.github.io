"use client";
import React from "react";
import Button from "@/src/app/components/common/button";
import ProjectCard from "@/src/app/components/common/project-card";
import { openSource, projects } from "@/src/app/data/content";

interface IRepository {
  name: string;
  url: string;
  tools: string[];
  description: string;
  image: string;
}

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen px-6 md:px-40">
      <div className="flex w-full justify-between">
        <h2 className="text-4xl">Portfolio</h2>
        <Button
          href={`https://github.com/${openSource.githubUserName}`}
          text="See more"
        />
      </div>
      <p className="mt-4 text-xl md:w-6/12">
        A small gallery of recent projects done all together with amazing people
        around the globe.
      </p>
      <div className="mt-8 grid gap-6 md:mt-16 md:grid-cols-3">
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
          <p className="text-center text-xl text-white">Nothing to show here</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
