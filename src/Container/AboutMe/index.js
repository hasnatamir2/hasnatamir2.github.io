import React from 'react'
import './about.css'
import {
    Grid,
    Card, 
    CardActions,
    CardContent,
    CardMedia,
    CardHeader ,
    Button,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    aboutMe,
    skillSet,
} from '../../portfolio'

const useStyles = makeStyles((theme) => ({
    aboutMe:{
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '5%',
        paddingBottom: '4rem',
    },
    content:{
        marginTop: '3rem',
        marginBottom: '4rem',
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
    card: {
        maxWidth: '75%',
        margin: 'auto',
        marginTop: '1rem',
    },
    heading:{
        fontWeight: '300',
        fontSize: '44px',
        textAlign: 'center',
    },
    desc:{
        fontSize: '1.1rem',
        fontWeight: '400',
        color: '#00000080'
    },
    skillCard:{
        
    },
    skillCardHeader:{
        backgroundColor: '#eee'
    },
    skill:{
        border: '1px solid transparent',
        color: '#00000080',
        borderRadius: '5px',
        margin: 'auto',
        // width: '40%',
        // justifyContent: 'center',
        textAlign: 'center',
        transition: '0.2s all ease-in',
        '&:hover':{
            border: '1px solid #000',
            boxShadow: '1px 1px 1px 1px #00000080'
        }
    },
    skillIcon:{
        fontSize: '4.5rem',
        margin: '5px',
    },
    skillTitle:{
        fontSize: '1rem'
    }
}))

const About = () =>{

    const classes = useStyles()
    return (
        <>
            <div className={classes.aboutMe} id="about">
            <div className={classes.pageTitle}>
                <h2 className={classes.pageHeading} >About Me</h2>
                <h5>Some this & That</h5>
            </div>
                <div className={classes.content}>
                    <Grid 
                        container
                        spacing={0}
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                    >
                        <Grid items md={6} sm={12}>
                            <Card variant="outlined" className={[classes.card]}>
                                <CardMedia
                                    component='img'
                                    alt='hasnat amir'
                                    title='hasnatDev'
                                    image={aboutMe.image}
                                />
                                <CardContent>
                                    <h3 className={classes.heading}>
                                        {aboutMe.name}
                                    </h3>
                                    <p className={classes.desc}>I{aboutMe.desc}</p>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" variant="contained" href={aboutMe.resumeLink} target="_blank">RESUME</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid items md={6} sm={12}>
                            <Card variant="outlined" className={[classes.card, classes.skillCard]}>
                                <CardHeader
                                    title="Programming Languages"
                                    className={classes.skillCardHeader}
                                />
                                <CardContent>
                                    <Grid 
                                        container
                                        // spacing={3}
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="flex-start"
                                    >
                                    {
                                        skillSet.programmingLang.map( (lang, index) => (
                                            <Grid items md={4} sm={6} className={classes.skill}>
                                                <FontAwesomeIcon icon={lang.icon} className={classes.skillIcon}/>
                                                <p className={classes.skillTitle}>{lang.name}</p>
                                            </Grid>
                                        ))
                                    }
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card variant="outlined" className={[classes.card, classes.skillCard]}>
                                <CardHeader
                                    title="Tools & FrameWorks"
                                    className={classes.skillCardHeader}
                                />
                                <CardContent>
                                    <Grid 
                                        container
                                        // spacing={3}
                                        direction="row"
                                        justify="space-around"
                                        alignItems="flex-start"
                                    >
                                    {
                                        skillSet.Tools.map( (tool, index) => (
                                            <Grid items md={4} sm={6} className={classes.skill}>
                                                <FontAwesomeIcon icon={tool.icon} className={classes.skillIcon}/>
                                                <p className={classes.skillTitle}>{tool.name}</p>
                                            </Grid>

                                        ))
                                    }
                                        
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default About