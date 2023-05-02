import Image from "next/image";
import React from "react";

const ProjectCard = () => {
    return (
        <div className='bg-gradient-linear backdrop-blur-xl rounded-2xl	overflow-hidden md:h-56 md:w-80 p-7'>
            <Image
                src='/placeholder.svg'
                className='transtion duration-250 ease py-5 px-0 relative top-0 left-0'
                alt='project'
                height={160}
                width={325}
            />
            <p className='text-5 m-1 relative top-12 left-0 transition duration-250 ease'>
                Addidas Ecommerce Store
            </p>
        </div>
    );
};

export default ProjectCard;
