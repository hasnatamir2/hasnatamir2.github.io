"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { experiences } from "../lib/data";
import { cn } from "../lib/utils";
import Badge from "./ui/badge";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="min-h-screen px-16 py-24 section-fade visible">
      <div className="max-w-4xl">
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-light tracking-wider uppercase">
            CAREER PATH
          </p>
          <h3 className="text-4xl font-light mt-4 mb-4">Experience</h3>
          <p className="text-gray-500 font-light">
            Progressive growth from junior to technical leadership
          </p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isLast = index === experiences.length - 1;

            return (
              <div key={exp.id} className="relative pb-12 pl-12">
                {!isLast && (
                  <div className="absolute bottom-0 left-[6px] top-2 w-px bg-border" />
                )}

                <div
                  className={cn(
                    "absolute left-0 top-0 h-3 w-3 rounded-full border-2 transition-all duration-300",
                    index === 0
                      ? "border-primary bg-primary shadow-lg shadow-primary/50"
                      : "border-gray-600 bg-gray-600"
                  )}
                />

                <div
                  className={cn(
                    "group cursor-pointer transition-all duration-300 p-1",
                    isExpanded && "bg-[#3b82f60d]"
                  )}
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                >
                  <div className="mb-2 text-sm text-gray-500">
                    {exp.year}
                  </div>

                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-medium mb-1 group-hover:text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-end flex-col gap-2 text-sm text-muted-foreground">
                      
                      <span className="flex gap-1 items-center text-right text-sm text-gray-500">
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
                        <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Key Responsibilities</p>
                        <ul className="space-y-2 text-gray-300 font-light">
                          {exp.responsibilities.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-2"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  
                    {exp.achievements && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Impact</p>
                        <ul className="space-y-2 text-gray-300 font-light">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-2"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          text={tech}
                          
                        />
                      ))}
                    </div>
                  </div>

                  {!isExpanded && (
                    <div className="mt-3 text-xs font-medium text-primary group-hover:underline">
                      Click to expand →
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
