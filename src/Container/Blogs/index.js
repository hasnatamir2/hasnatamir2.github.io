import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card, 
    CardActionArea,
    CardContent,
} from '@material-ui/core'
import {blogs} from '../../portfolio'

const useStyles = makeStyles( theme => ({
    blogs:{
        backgroundColor: '#eeeeee50',
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
    blogPost:{
        border: '1px solid #85dcb050',
        transition: '0.2s all ease-in',
        width: '75%',
        margin: 'auto',
        marginTop: '1rem',
        '&:hover':{
            border: '1px solid #85dcb0',
            boxShadow: '1px 1px 1px 1px #85dcb0'
        }
    },
    blogTitle:{
        fontWeight: '300',
        color: '#000',
        fontSize: '34px',
        marginBottom: '1rem',
    },
    blogSummary:{
        fontSize: '1.1rem',
        fontWeight: '400',
        paddingBottom: '1rem',
        color: '#00000080'
    },
    linkIcon:{
        fontSize: '1rem',
        fontWeight: '400',
        color: '#00000080',
    }
}))

const Blogs = () => {

    const classes = useStyles()
    return(
        <>
        {
            blogs.show ? (

        <div className={classes.blogs} id="blogs">
            <div className={classes.pageTitle}>
                <h2 className={classes.pageHeading} >{blogs.title}</h2>
                <h5>{blogs.subtitle}</h5>
            </div>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
            {
                blogs.blogs.map( blog => (

                    <Grid items md={6} sm={12}>
                        <Card className={classes.blogPost} variant="outlined">
                            <CardActionArea href={blog.link} target="_blank">
                                <CardContent>
                                    <h2 className={classes.blogTitle}>
                                        {blog.title}
                                        <FontAwesomeIcon className={classes.linkIcon} icon={['fas', 'external-link-alt']} />
                                    </h2>
                                    <h5 className={classes.blogSummary}>{blog.desc}</h5>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }                
            </Grid>
        </div>
        ): null

        }
        </>
    )
}

export default Blogs;