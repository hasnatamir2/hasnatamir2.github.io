import React, { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Grid,
    Card,
    CardHeader,
    CardActionArea,
    CardContent,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ApolloClient, { gql } from "apollo-boost";
import { openSource } from '../../portfolio'

const useStyles = makeStyles((theme) => ({
    openSource:{
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#eee',
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
    repo:{
        marginTop: '3rem'
    },
    card:{
        border: '1px solid #000',
        transition: '0.2s all ease-in',
        boxShadow: '1px 1px 1px 1px #00000080',
        width: '75%',
        margin: 'auto',
        marginBottom:'1rem',
        '&:hover':{
            border: '1px solid #00000080',
            boxShadow: '0px 0px 0px 0px transparent'
        }
    },
    repoTitle:{
        fontSize: '1.8rem',
        fontWeight: '400',
        '&:hover':{
            color:'#e27d60',
        }
    },
    repoDesc:{
        fontSize: '1.1rem',
        fontWeight: '400',
        paddingBottom: '1rem',
        color: '#00000080'
    },
    repoStats:{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        fontWeight: '400',
        color: '#00000080',
        '& span':{
            display: 'flex',
            marginRight: '0.75rem',
            alignItems: 'center',
        }
    },
    languageColor: {
        width: '12px',
        height: '12px',
        marginRight: '0.25rem',
        borderRadius: '50%',
        backgroundColor: 'blue'
    },
    fork:{
        fontSize: '1.1rem',
        marginRight: '0.25rem'
    },
    moreProject:{
        margin: '3rem'
    }
}))


const OpenSource = () => {
    const classes = useStyles()
    const [repo, setrepo] = useState([]);


    useEffect(() => {
        getRepoData();
    }, []);
    
      function getRepoData() {
        const client = new ApolloClient({
          uri: "https://api.github.com/graphql",
          request: (operation) => {
            operation.setContext({
              headers: {
                authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
              },
            });
          },
        });
    
        client
          .query({
            query: gql`
            {
            user(login: "${openSource.githubUserName}") {
              pinnedItems(first: 6, types: [REPOSITORY] ) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                        name,
                        owner {
                          login  
                        },
                        stargazers {
                            totalCount
                        },
                        descriptionHTML,
                    }
                  }
                }
              }
            }
          }
            `,
          })
          .then((result) => {
            // setrepoFunction(result.data.user.pinnedItems.edges);
            console.log(result);
          })
          .catch(function (error) {
            console.log(error);
            // setrepoFunction("Error");
            console.log("Because of this Error, nothing is shown in place of Projects section. Projects section not configured");
          });
    }

    const setrepoFunction = (array) => {
        setrepo(array);
    }

    return(
        <>
        {
            openSource.show ? (


        <div className={classes.openSource} id="openSource">
            <div className={classes.pageTitle}>
                <h2 className={classes.pageHeading} >Open Source Projects</h2>
                <h5>Go & check it!!</h5>
            </div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                className={classes.repo}
            >
                <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardActionArea href='#' target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h3 className={classes.repoTitle}>PWA-Olx-Clone</h3>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor}></div>
                                    <p>JavaScript</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>420</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>125</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>12548 KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardActionArea href='#' target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h4 className={classes.repoTitle}>PWA-Olx-Clone</h4>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor}></div>
                                    <p>JavaScript</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>420</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>125</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>12548 KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardActionArea href='#' target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h4 className={classes.repoTitle}>PWA-Olx-Clone</h4>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor}></div>
                                    <p>JavaScript</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>420</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>125</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>12548 KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardActionArea href='#' target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h4 className={classes.repoTitle}>PWA-Olx-Clone</h4>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor}></div>
                                    <p>JavaScript</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>420</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>125</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>12548 KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardActionArea href='#' target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h4 className={classes.repoTitle}>PWA-Olx-Clone</h4>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor}></div>
                                    <p>JavaScript</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>420</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>125</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>12548 KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardActionArea href='#' target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h4 className={classes.repoTitle}>PWA-Olx-Clone</h4>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor}></div>
                                    <p>JavaScript</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>420</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>125</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>12548 KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid items>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        className={classes.moreProject}
                    >
                        More Projects
                    </Button>
                </Grid>
            </Grid>
        </div>
        ): null
        }
        </>
    )
}

export default OpenSource;