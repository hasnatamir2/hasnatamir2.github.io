import { FC } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface IExperience {
    title: string;
    company: string;
    time: string;
    achievment: string;
    catagory: string;
}

const Timeline: FC<{ experience: IExperience[] }> = ({ experience }) => {
    return (
        <div className='timeline'>
            <VerticalTimeline>
                {experience.map((step, index) => (
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        date={step.time}
                        contentStyle={{
                            background:
                                "bg-gradient-linear",
                            color: "#F6F7F9",
                            backdropFilter: "blur(25px)",
                            borderRadius: "16px",
                        }}
                        iconStyle={
                            step.catagory === "work"
                                ? { background: "#8E54E9", color: "#fff" }
                                : { background: "#E29587", color: "#fff" }
                        }
                        // icon={
                        //     step.catagory === "work" ? (
                        //         <FontAwesomeIcon
                        //             icon={["fas", "laptop-code"]}
                        //         />
                        //     ) : (
                        //         <FontAwesomeIcon
                        //             icon={["fas", "graduation-cap"]}
                        //         />
                        //     )
                        // }
                        key={index}
                    >
                        <h3>{step.title}</h3>
                        <h4>{step.company}</h4>
                        <p className='gradient-text'>
                            {step.achievment}
                        </p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: "#E29587", color: "#fff" }}
                    // icon={<FontAwesomeIcon icon={["fas", "star"]} />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
