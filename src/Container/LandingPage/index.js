import React from 'react'
import './Landing.css'
import {
    Grid,
    Tooltip ,
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Greeting,
    socialLink,
} from '../../portfolio'

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    moreInfo:{
        border: '1px solid #eee',
        borderRadius: "5px",
        // boxShadow: '0px 0px 2px 3px #eee',
        left: '50%',
        bottom: '5%',
        transform: 'translateX(-50%)',
        position: 'absolute',
        itemAlign: 'center',
        justifyContent: 'center',
        color: '#eee',
        // padding: '12px',
        display: 'inline-block',
        transition: '0.2s all ease-in',
        '&:hover':{
            border: '1px solid #00000080',
            boxShadow: '1px 1px 1px 1px #00000080',
            color:'#eee'
        },
        [theme.breakpoints.down('xs')]: {
            bottom: '3%'
        }
    },
    moreInfoIcon:{
        fontSize: '3rem',
        padding: 5
        // width: '55px',
        
    }
}))

const LandingPage = () => {

    const classes = useStyles();

    return(
        <>
            <div className="landing">

            {/* Content for introduction */}
            
            <div className="intro-title">
                <h1 className="title">{Greeting.title}</h1>
                
                <h5>{Greeting.subTitle}</h5>
                <div className="divider"></div>
                <div className="social-contact">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        {
                            Greeting.socialLink.map(social => (
                                <Grid items md={3}>
                                    <Tooltip title={social.tooltip} arrow>
                                        <a href={social.link} className="social-icon">
                                        <FontAwesomeIcon icon={social.icon}/>
                                        </a>
                                    </Tooltip>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
            <a href="#about" className={classes.moreInfo} >
                <Tooltip title="More Info" arrow>
                <FontAwesomeIcon icon={["fas", "chevron-down"]} className={classes.moreInfoIcon} />
                </Tooltip>
            </a>
            </div>
            {/* <div className="background-icon">
                <span><img src="/android.svg" alt=""/></span>
            </div> */}
        </>
    )
}

export default LandingPage;