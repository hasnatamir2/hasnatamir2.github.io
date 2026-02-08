"use client";

import { useState } from "react";
import type { Skill } from "../types/content";
import { cn } from "../lib/utils";
import Badge from "./ui/badge";

type SkillCategoryLabel = "All" | "Frontend" | "Backend" | "Tools & DevOps";

enum SkillCategory {
  ALL='all',
  FRONTEND='frontend',
  BACKEND='backend',
  TOOLS_DEVOPS='devops'
}

export default function Skills({ skills }: { skills: Skill[] }) {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>(SkillCategory.ALL);

  const filters: {label:SkillCategoryLabel, value: SkillCategory}[] = [
    {label:"All", value: SkillCategory.ALL},
    {label:"Frontend", value: SkillCategory.FRONTEND},
    {label: "Backend", value: SkillCategory.BACKEND},
    {label: "Tools & DevOps", value:SkillCategory.TOOLS_DEVOPS},
  ];

  const getSkillsByCategory = () => {
    if (activeFilter === SkillCategory.ALL) {
      return skills
    }

    return skills.filter(skill => skill.category === activeFilter)
  };

  const displayedSkills = getSkillsByCategory();

  const getSkillColor = (skill: string) => {
    switch (skill) {
      case "frontend":
        return "bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 border-blue-600/20 dark:border-blue-400/20";
      case "backend":
        return "bg-green-600/10 text-green-600 border-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:border-green-400/20";
      case "devops":
        return "bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 border-purple-600/20 dark:border-purple-400/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };


  return (
    <section id="skills" className="min-h-screen px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 section-fade visible">
      <div className="max-w-5xl">
        <div className="mb-12 sm:mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-xs font-light tracking-wider uppercase sm:text-sm">
            TECHNICAL EXPERTISE
          </p>
          <h3 className="text-3xl font-light mt-3 mb-3 sm:text-4xl sm:mt-4 sm:mb-4">Skills</h3>
          <p className="text-muted-foreground font-light text-sm sm:text-base" >
            Technologies and tools I use to build exceptional products
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-3 py-2 text-xs border hover:border-primary hover:text-primary transition-colors border-border text-muted-foreground sm:px-4 sm:text-sm",
                {
                  "border-blue-600 bg-blue-600/10 text-blue-600 dark:border-blue-400 dark:bg-blue-400/10 dark:text-blue-400" : activeFilter === filter.value
                }
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {displayedSkills.map((skill, index) => (
            <Badge
              key={skill._id}
              classNames={cn(
                `group relative cursor-pointer px-3 py-2 border text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-softGlow text-center sm:px-4 sm:py-3 sm:text-base`,
                getSkillColor(skill.category)
              )}
              styles={{
                animationDelay: `${index * 0.05}s`,
              }}
              text={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
