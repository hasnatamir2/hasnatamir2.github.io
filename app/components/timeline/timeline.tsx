"use client";
import { FC } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../icons/work-icon";
import GraduationIcon from "../icons/graduation-icon";
import StarIcon from "../icons/star-icon";

interface IExperience {
    title: string;
    company: string;
    time: string;
    achievment: string;
    catagory: string;
}

const Timeline: FC<{ experience: IExperience[] }> = ({ experience }) => {
    return (
        <div className='timeline md:mt-16 mt-8'>
            <VerticalTimeline>
                {experience.map((step, index) => (
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        date={step.time}
                        contentStyle={{
                            background:
                                "linear-gradient(112.83deg, rgba(0, 0, 0, 0.6) 3.66%, rgba(0, 0, 0, 0.1) 100%)",
                            color: "#F6F7F9",
                            backdropFilter: "blur(25px)",
                            borderRadius: "16px",
                        }}
                        iconStyle={
                            step.catagory === "work"
                                ? { background: "#8E54E9", color: "#fff" }
                                : { background: "#E29587", color: "#fff" }
                        }
                        icon={
                            step.catagory === "work" ? (
                                <WorkIcon />
                            ) : (
                                <GraduationIcon />
                            )
                        }
                        key={index}
                    >
                        <h3>{step.title}</h3>
                        <h4>{step.company}</h4>
                        <p className='gradient-text'>{step.achievment}</p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: "#E29587", color: "#fff" }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
