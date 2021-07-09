import React from 'react'
import './contact.css'
import {
    Grid,
    Tooltip ,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contact, socialLink } from '../../portfolio'

const useStyles = makeStyles((theme) => ({
    contact:{
        // backgroundColor: '#eeeeee50',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 'auto',
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
    content:{
        fontSize: '1.5rem',
        marginLeft: '2rem',
        fontWeight: '300',
        marginTop: '1rem',
        textAlign: 'center',
    },
    contactContainer:{
        textAlign: 'center',
    },
    contactCard:{
        padding: '15px',
        textAlign: 'center',
        fontSize: '1.5rem',
        borderRadius: '5px',
        margin: '1rem',
        marginTop: '2rem',
        textDecoration: 'none',
        display: 'inline-block',
        border: '1px solid #eee',
        transition: '0.2s all ease-in',
        '&:hover':{
            border: '1px solid #000',
            boxShadow: '1px 1px 1px 1px #00000080'
        }
    },
}))

const Contact = () => {
    const classes = useStyles()
    return(
        <div className={classes.contact} id="contact">
            <div className={classes.pageTitle}>
                <h2 className={classes.pageHeading} >{contact.title}</h2>
                <h5>{contact.subtitle}</h5>
            </div>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid items md={12} sm={12}>
                {
                    contact.message.map( msg => (
                        <p className={classes.content}><FontAwesomeIcon icon={msg.icon} /> {msg.msg}</p>
                    ))
                }
                </Grid>
                    {
                        socialLink.map( social => (
                            <Grid items md sm={4}>
                                <div className={classes.contactContainer}>
                                    <Tooltip title={social.tooltip} arrow>
                                        <a href={social.link} style={{background: `${social.bgColor}`}} className={classes.contactCard}>    
                                            <FontAwesomeIcon icon={social.icon} color="#fff" />
                                        </a>
                                    </Tooltip>
                                </div>
                            </Grid>
                        ))
                    }
            </Grid>
        </div>
    )
}

export default Contact;