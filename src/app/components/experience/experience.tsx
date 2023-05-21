import React from "react";
import Timeline from "../timeline";
import { experience } from "@/src/app/data/content";

const Experience = () => {
  return (
    <section id="experience" className="mb-16 min-h-screen px-6 md:px-40">
      <h2 className="text-4xl">Experience</h2>
      <p className="mt-4 text-xl md:w-6/12">3+ years and counting</p>
      <Timeline experience={experience.experiences} />
    </section>
  );
};

export default Experience;
