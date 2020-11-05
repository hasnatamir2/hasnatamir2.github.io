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
                authorization: `Bearer fcf3fbb88bb013cfd73638c98fb7cb7b0b9b9c48`,
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
                        name
                        description
                        forkCount
                        stargazers {
                          totalCount
                        }
                        url
                        id
                        diskUsage
                        primaryLanguage {
                          name
                          color
                        }
                      }
                    }
                  }
              }
            }
          }
            `,
          })
          .then((result) => {
            setrepoFunction(result.data.user.pinnedItems.edges);
            console.log(result.data.user.pinnedItems.edges);
          })
          .catch(function (error) {
            console.log(error);
            setrepoFunction("Error");
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
            {
                repo.map(rep => (
                    <Grid items md={6} sm={12}>
                    <Card className={classes.card} variant="outlined" key={rep.node.id}>
                        <CardActionArea href={rep.node.url} target="_blank">

                            <CardHeader
                                avatar={<FontAwesomeIcon icon={['fas', 'book']} />}
                                title={<h3 className={classes.repoTitle}>{rep.node.name}</h3>}
                            />
                            <CardContent >
                            <p className={classes.repoDesc}>
                                {rep.node.description}
                            </p>
                            <div className={classes.repoStats}>
                                <span>
                                    <div className={classes.languageColor} style={{ backgroundColor: rep.node.primaryLanguage.color}}></div>
                                    <p>{rep.node.primaryLanguage.name}</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'code-branch']}/>
                                    <p>{rep.node.forkCount}</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'star']}/>
                                    <p>{rep.node.stargazers.totalCount}</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon className={classes.fork} icon={['fas', 'database']}/>
                                    <p>{rep.node.diskUsage} KB</p>
                                </span>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                ))
            }
                <Grid items>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        href="https://github.com/hasnatamir2"
                        target="_blank"
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