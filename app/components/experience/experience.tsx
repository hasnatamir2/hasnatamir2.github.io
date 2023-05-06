import React from "react";
import Timeline from "../timeline";
import { experience } from "@/app/data/content";

const Experience = () => {
    return (
        <section id='experience' className='min-h-screen px-6 mb-16 md:px-40'>
            <h2 className='text-4xl'>Experience</h2>
            <p className='text-xl mt-4 md:w-6/12'>3+ years and counting</p>
            <Timeline experience={experience.experiences} />
        </section>
    );
};

export default Experience;
