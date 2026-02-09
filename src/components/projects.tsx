"use client";

import { ArrowRight } from "lucide-react";
import type { Project } from "../types/content";
import { sanityToNextImg, cn } from "../lib/utils";
import Link from "next/link";
import Badge from "./ui/badge";
import Image from "next/image";
import { GithubIcon } from "@sanity/icons";

export default function Projects({ projects }: { projects: Project[] }) {

  return (
    <section id="projects" className="min-h-screen px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 section-fade visible">
      <div className="max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-xs font-light tracking-wider uppercase sm:text-sm">
            SELECTED WORK
          </p>
          <h2 className="text-3xl font-light mt-3 mb-3 sm:text-4xl sm:mt-4 sm:mb-4">Projects</h2>
          <p className="text-muted-foreground font-light text-sm sm:text-base">
            High-impact applications built with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        `group cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-br from-card to-background dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border border-border p-6 sm:p-8 h-full relative overflow-hidden col-span-1 row-span-1 hover:-translate-y-1 hover:rotate-0.5 hover:shadow-glow lg:col-span-4`,
        {
          'lg:col-span-8 lg:row-span-2': project.featured
        }
      )}
    >
      {project.image && (
        <div className={cn("absolute -bottom-8 -right-8 w-32 h-32 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:-bottom-4 group-hover:-right-4 pointer-events-none", 
          { 
            "w-48 h-48": project.featured
          })
        }>
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-600/30 dark:border-blue-400/30 shadow-2xl backdrop-blur-sm">
            <Image
              src={sanityToNextImg(project.image)}
              alt={project.title}
              fill
              className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50"></div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 dark:from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10 space-y-4">
        {project.featured && (
          <span className="mb-6 text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Featured Project
          </span>
        )}
        
        <div>
          <h4 className={cn("sm:text-xl text-lg font-medium mb-1", {
            'text-2xl font-medium sm:text-3xl': project.featured
          })}>
            {project.title}
          </h4>
          <p className={cn("text-xs text-muted-foreground mb-4")}>{project.subtitle}</p>
        </div>

        <p className={cn("line-clamp-3 text-muted-foreground font-light mb-6 leading-relaxed", 
          {"text-sm": !project.featured}
        )}>
          {project.description}
        </p>

        {project.impact && project.featured && (
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-2">Impact</div>
            <ul className="space-y-2 text-muted-foreground font-light">
              {project.impact?.map((imp, key) =>
                <li key={key} className="flex items-baseline gap-2">
                  <div className="text-blue-600 dark:text-blue-400">•</div>
                  <span>{imp}</span>
                </li>
              )}
            </ul>
          </div>
        )}

        <div className={cn(`opacity-0 group-hover:opacity-100 transition-opacity`, {
          'opacity-100': project.featured
        })}>
          <div className="flex flex-wrap gap-2 mb-6">
            {!project.featured && project.technologies.slice(0, 2).map((tech) => (
              <Badge
                text={tech.name}
                key={tech._id} 
                classNames={!project.featured ? 'px-2 py-1 bg-blue-600/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 text-xs' : 'px-3'}
              />
            ))}
            {project.featured && project.technologies.map((tech) => (
              <Badge
                text={tech.name}
                key={tech._id} 
                classNames={!project.featured ? 'px-2 py-1 bg-blue-600/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 text-xs' : 'px-3'}
              />
            ))}
            {!project.featured && project.technologies.length > 3 && (
              <Badge text={`+${project.technologies.length - 2} more`} />
            )}
          </div>
          
          <div className="flex gap-4 items-center text-blue-600 dark:text-blue-400">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm font-medium flex items-center gap-2 text-blue-600 dark:text-blue-400"
              >
                Visit Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm font-medium flex items-center gap-2 text-blue-600 dark:text-blue-400"
              >
                <GithubIcon className="h-4 w-4" />
                Github
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
