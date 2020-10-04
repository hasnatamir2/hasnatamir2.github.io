import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Grid,
    Card,
    CardHeader,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Chip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { projects} from '../../portfolio'

const useStyles = makeStyles((theme) => ({
    projects:{
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
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
    card:{
        maxWidth: '75%',
        margin: 'auto',
        marginBottom: '2rem',
        marginTop: '2rem',
        transition: '0.2s all ease-in',
        '&:hover':{
            border: '1px solid #000000',
            boxShadow: '1px 1px 1px 1px #00000080'
        },
    },
    cardMedia:{
        height: '15rem',
    },
    chip:{
        marginRight: theme.spacing(1)
    },
    cardTitle:{
        fontWeight: '300',
        color: '#000',
        fontSize: '34px',
        marginBottom: '1rem',
    },
    cardDesc: {
        fontSize: '1rem',
        fontWeight: '400',
        paddingBottom: '1rem',
        color: '#00000080'
    }
}))

const Projects = () => {

    const classes = useStyles()
    return(
        <div className={classes.projects} id="projects">
            <div className={classes.pageTitle}>
                <h2 className={classes.pageHeading} >{projects.title}</h2>
                <h5>{projects.subtitle}</h5>
            </div>
            <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
            {
                projects.projects.map( project => 
                (
                    <Grid items md={4} sm={6}>
                        <Card className={classes.card} variant="outlined">
                        <CardMedia
                        className={classes.cardMedia}
                        component='img'
                        image={project.image}
                        title={project.title}
                        />
                        <CardContent>
                        <h3 className={classes.cardTitle}>
                            {project.title}
                        </h3>
                        <p className={classes.cardDesc}>
                            {project.desc}
                        </p>
                        {
                            project.tools.map(tool => (
                                <Chip label={tool} className={classes.chip} />
                            ))
                        }
                                                
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href={project.link} variant="contained">
                                Go Check it out
                            </Button>
                        </CardActions>
                        </Card>

                    </Grid>
                ))
            }
                
            </Grid>
        </div>
    )
}

export default Projects