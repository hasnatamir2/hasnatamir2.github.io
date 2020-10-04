import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {experience} from '../../portfolio'

const useStyles = makeStyles((theme) => ({
    experience:{
        backgroundColor: '#eee',
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '5%',
        paddingBottom: '4rem',
    },
    pageTitle:{
        textAlign: 'center',
        marginBottom: '1rem',
        color: '#00000080',
    },
    pageHeading:{
        fontWeight: '300',
        fontSize: '44px',
        color: '#000000',
    },
    timeLine:{
        
    },
    timeLineElement:{
        border: '1px solid #eee',
        marginTop: '2rem',
    },
    elementTitle:{
        fontWeight: '300',
        fontSize: '34px',
    },
    elementCompany:{
        fontSize: '24px',
        fontWeight: '400',
    },
    elementContent:{
        fontSize: '1.1rem',
        fontWeight: '400',
        paddingBottom: '1rem',
        color: '#00000080'
    },
}))


const Experience = () => {
    const classes = useStyles()
  
    return (
        <div className={classes.experience} id="experience">
            <div className={classes.pageTitle}>
                <h2 className={classes.pageHeading} >{experience.title}</h2>
                <h5>{experience.subtitle}</h5>
            </div>
            <VerticalTimeline
                className={classes.timeLine}
                // layout="1-column"
            >
            {
                experience.experience.map((step, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={step.time}
                        contentStyle={
                            (step.catagory === 'work') ? 
                            (
                                {
                                    border: '1px solid #7cc3b4', 
                                    'border-top': '5px solid #7cc3b4'
                                }
                            ): (
                                {
                                    border: '1px solid #e27d60', 
                                    'border-top': '5px solid #e27d60'
                                }
                            )
                                }
                        iconStyle={(step.catagory === 'work') ? ({ background: '#7cc3b4', color: '#fff' }):({ background: '#e27d60', color: '#fff' })}
                        icon={(step.catagory === 'work') ? (<FontAwesomeIcon icon={['fas', 'laptop-code']} />): <FontAwesomeIcon icon={['fas', 'graduation-cap']} />}
                    >
                        <h3 className={classes.elementTitle}>{step.title}</h3>
                        <h4 className={classes.elementCompany}>{step.company}</h4>
                        <p className={classes.elementContent}>
                        {step.achievment}
                        </p>
                    </VerticalTimelineElement>
                ))
            }
            <VerticalTimelineElement
            iconStyle={{background: '#e27d60', color: '#fff'}}
                icon={<FontAwesomeIcon icon={['fas', 'star']}/>}
            />
            </VerticalTimeline>
        </div>
    );
}

export default Experience;