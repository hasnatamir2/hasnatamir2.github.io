import Image from "next/image";
import { FC } from "react";
import "./common.css";
import Button from "./button";

const ProjectCard: FC<{
  icon?: string;
  title: string;
  url?: string;
  tools?: string[];
  description?: string;
  image?: string;
}> = ({ title, url, tools, image }) => {
  return (
    <div
      className="project-card md:min-w-80 group h-56 
                    overflow-hidden rounded-2xl bg-gradient-linear p-7 backdrop-blur-xl md:h-56"
    >
      <Image
        src={image ? image : "/placeholder.svg"}
        className="transtion duration-250 ease relative left-0 top-0 px-0 py-0"
        alt="project"
        height={160}
        width={325}
      />
      <p
        className="gradient-text duration-250 ease relative text-xs uppercase transition 
                group-hover:-top-3 md:group-hover:-top-8 "
      >
        {tools && tools?.length > 0 && (
          <span className="m-0 mr-1 bg-gradient-linear-color bg-clip-text text-transparent">
            {tools.join(", ").length > 35
              ? tools.join(", ").substring(0, 35) + "..."
              : tools.join(", ")}
          </span>
        )}
      </p>
      <p
        className="text-5 duration-250 ease relative left-0 top-12 transition 
                group-hover:-top-8 md:group-hover:-top-12"
      >
        {title}
      </p>
      <Button href={url} text="Visit website" />
    </div>
  );
};

export default ProjectCard;
