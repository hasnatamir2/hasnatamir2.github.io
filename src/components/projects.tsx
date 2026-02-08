"use client";

import { Github, ArrowRight } from "lucide-react";
import { projects } from "../lib/data";
import { cn } from "../lib/utils";
import Link from "next/link";
import Badge from "./ui/badge";

export default function Projects() {

  return (
    <section id="projects" className="min-h-screen px-16 py-24 section-fade visible">
      <div className="max-w-6xl">
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-light tracking-wider uppercase">
            SELECTED WORK
          </p>
          <h2 className="text-4xl font-light mt-4 mb-4">Projects</h2>
          <p className="text-gray-500 font-light">
            High-impact applications built with precision and care
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className={cn(`group cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-8 h-full relative overflow-hidden col-span-4 row-span-1 hover:-translate-y-1 hover:rotate-0.5 hover:shadow-glow`, {
        'col-span-8 row-span-2': project.featured
      })}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10 space-y-4">
        {project.featured && <span className="mb-6 text-xs text-blue-400 uppercase tracking-wider">
          Featured Project
        </span>}
        <div>
          <h4 className="text-3xl font-medium mb-1">
            {project.title}
          </h4>
          <p className="text-xs text-muted-foreground mb-4">{project.subtitle}</p>
        </div>

        <p className="line-clamp-3 text-gray-400 font-light mb-6 leading-relaxed">
          {project.description}
        </p>

        {project.impact && project.featured && <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2">Impact</div>
          <ul className="space-y-2 text-gray-400 font-light">
            {project.impact?.map((imp, key) =>
              <li key={key} className="flex items-baseline gap-2">
                <div className="text-blue-400">•</div>
                <span>{imp}</span>
              </li>
            )}
          </ul>
        </div>}

        <div className={cn(`opacity-0 group-hover:opacity-100 transition-opacity`, {
          'opacity-100': project.featured
        })}>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 2).map((tech) => (
              <Badge
                text={tech}
                key={tech} />
            ))}
            {project.technologies.length > 3 && <Badge
                text={`+${project.technologies.length - 2} more`} />}
          </div>
          <div className="flex gap-4 items-center text-blue-400">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm font-medium flex items-center gap-2 text-blue-400"
              >
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm font-medium flex items-center gap-2 text-blue-400"
              >
                <Github className="h-4 w-4" />
                Github
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
