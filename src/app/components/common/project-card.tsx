import Image from "next/image";
import { FC, ReactNode } from "react";
import "./common.css";
import Button from "./button";

const ProjectCard: FC<{
    icon?: string;
    title: string;
    url?: string;
    tools?: string[];
    description?: string;
    image?: string;
}> = ({ icon, title, url, tools }) => {
    return (
        <div
            className='group project-card bg-gradient-linear backdrop-blur-xl 
                    rounded-2xl overflow-hidden h-56 md:h-56 md:min-w-80 p-7'
        >
            <Image
                src={icon ?? "/placeholder.svg"}
                className='transtion duration-250 ease py-0 px-0 relative top-0 left-0'
                alt='project'
                height={160}
                width={325}
            />
            <p
                className='gradient-text relative text-xs uppercase transition duration-250 ease 
                group-hover:-top-3 md:group-hover:-top-8 '
            >
                {tools && tools?.length > 0 && (
                    <span className='m-0 mr-1 bg-gradient-linear-color bg-clip-text text-transparent'>
                        {tools.join(", ").length > 37
                            ? tools.join(", ").substring(0, 37) + "..."
                            : tools.join(", ")}
                    </span>
                )}
            </p>
            <p
                className='text-5 relative top-12 left-0 transition duration-250 ease 
                group-hover:-top-8 md:group-hover:-top-12'
            >
                {title}
            </p>
            <Button href={url} text='Visit website' />
        </div>
    );
};

export default ProjectCard;
