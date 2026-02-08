"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Experience } from "../types/content";
import { cn } from "../lib/utils";
import Badge from "./ui/badge";

export default function Experience({ experiences }: { experiences: Experience[] }) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  return (
    <section id="experience" className="min-h-screen px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 section-fade visible">
      <div className="max-w-4xl">
        <div className="mb-12 sm:mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-xs font-light tracking-wider uppercase sm:text-sm">
            CAREER PATH
          </p>
          <h3 className="text-3xl font-light mt-3 mb-3 sm:text-4xl sm:mt-4 sm:mb-4">Experience</h3>
          <p className="text-muted-foreground font-light text-sm sm:text-base">
            Progressive growth from junior to technical leadership
          </p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const expId = exp._id ?? exp.id ?? index;
            const isExpanded = expandedId === expId;
            const isLast = index === experiences.length - 1;

            return (
              <div key={expId} className="relative pb-10 pl-8 sm:pb-12 sm:pl-12">
                {!isLast && (
                  <div className="absolute bottom-0 left-[6px] top-2 w-px bg-border" />
                )}

                <div
                  className={cn(
                    "absolute left-0 top-0 h-3 w-3 rounded-full border-2 transition-all duration-300",
                    index === 0
                      ? "border-primary bg-primary shadow-lg shadow-primary/50"
                      : "border-muted-foreground bg-muted-foreground"
                  )}
                />

                <div
                  className={cn(
                    "group cursor-pointer transition-all duration-300",
                    isExpanded && "bg-primary/10 p-2"
                  )}
                  onClick={() => setExpandedId(isExpanded ? null : expId)}
                >
                  <div className="mb-2 text-sm text-muted-foreground">
                    {exp.year}
                  </div>

                  <div className="mb-2 flex flex-col items-start justify-between gap-4 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-medium mb-1 group-hover:text-primary sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-start sm:items-end flex-col gap-2 text-sm text-muted-foreground">

                      <span className="flex gap-1 items-center text-left sm:text-right text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" /> {exp.location}
                      </span>
                      <span className="rounded bg-card px-2 py-1 text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isExpanded ? "h-max opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {exp.responsibilities && (
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Key Responsibilities</p>
                        <ul className="space-y-2 text-foreground/80 font-light">
                          {exp.responsibilities.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-2"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  
                    {exp.achievements && (
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Impact</p>
                        <ul className="space-y-2 text-foreground/80 font-light">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-2"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.technologies?.length ? (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech._id} text={tech.name} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
