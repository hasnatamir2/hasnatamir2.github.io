import React from 'react'
// import './Header.css'
import {
    Button,
    
    SwipeableDrawer,
    Divider,
    List, 
    ListItem,
    ListItemText,
    ListItemIcon,
    Tooltip,
} from '@material-ui/core';

import * as portfolio from '../../portfolio'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    fullScreenMenu: {
        // width: '5%',
        // height: '10%',
        border: '1px solid #eee',
        borderRadius: "5px",
        // boxShadow: '0px 0px 2px 3px #eee',
        left: '2.5%',
        top: '5%',
        zIndex: '100',
        position: 'fixed',
        itemAlign: 'center',
        justifyContent: 'center',
        color: '#eee',
        padding: '12px',
        display: 'inline-block',
        backgroundColor: ' #e27d60',
        /* width: 100px;
        height: 100px; */
        transition: '0.2s all ease-in',
        '&:hover':{
            border: '1px solid #00000080',
            boxShadow: '1px 1px 1px 1px #00000080',
            color:'#eee',
            backgroundColor: ' #e27d60',
        },
    },
    menuButtonIcon: {
        fontSize: '2rem'
        // left: '50%',
        // top: '50%',
        // transform: 'translateX(-50%)',
        // position: 'relative',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    //   padding: theme.spacing(0),
        color: 'inherit',
        border: 'none',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'none',
            color: '#000',
            borderLeft: '2px solid #000'
        }
    },
    siteTitle: {
        textDecoration:'none',
        color: 'inherit',
        '& h2':{
            fontSize: '2rem',
            fontWeight: '400',
            padding: theme.spacing(4),
            textAlign: 'center'
        },
        '& p': {
            fontSize: '1.2rem',
            // padding: theme.spacing(1),
            textAlign: 'center',
        }
    },
    resume:{
        marginTop: '10%',
        marginBottom: '2rem',
        postion: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
    },
}));

const Header = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(false);
    };

    const list = (
        <div
          className={clsx(classes.drawerPaper)}
          role="presentation"
          onClick={handleDrawerOpen}
          onKeyDown={handleDrawerClose}
        >
            <a href="#" className={classes.siteTitle}>
                <h2>
                    {portfolio.Greeting.title}
                </h2>
                <p style={{'margin-bottom': '1rem', 'font-size': '1rem'}}>{portfolio.Greeting.subTitle}</p>
            </a>
            <Divider/>
            <List>
                {
                    [
                        {
                            name: 'About',
                            logo: ['fas', 'user'],
                            link : '#about'
                        },
                        `${
                            portfolio.openSource.show ? (
                                {
                                    name: 'Open Source Projects',
                                    logo: ['fas', 'code-branch'],
                                    link : '#openSource'
                                }
                                
                            ) : null

                        }`,
                        {
                            name: 'Projects',
                            logo: ['fas', 'code'],
                            link : '#projects'
                        },
                        `${
                            portfolio.openSource.show ? 
                            (
                                {
                                    name: 'Blogs',
                                    logo: ['fas', 'bookmark'],
                                    link : '#blogs'
                                }
                            ):null
                        }`,
                        
                        {
                            name: 'Experience',
                            logo: ['fas', 'laptop-code'],
                            link : '#experience'
                        },
                        {
                            name: 'Contact',
                            logo: ['fas', 'headset'],
                            link : '#contact'
                        },
                    ].filter(Boolean).map((text, index) => (
                        <a href={text.link} className={classes.content}> 
                            <ListItem button key={text}>
                                <ListItemIcon><FontAwesomeIcon icon={text.logo} /></ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItem>
                        </a>
                    ))
                }
            </List>
            <Divider />
            <Button variant="contained" color="primary" className={classes.resume}>
                RESUME
            </Button>
        </div>
    );


    return(
        <React.Fragment className="header">
            
            <nav>
                <Tooltip title="Menu" arrow placement="right">
                    <Button className={classes.fullScreenMenu} onClick={handleDrawerOpen}>
                        <FontAwesomeIcon className={classes.menuButtonIcon} icon={['fas', 'bars']}/>
                    </Button>
                </Tooltip>                        
                    
                        
                <React.Fragment >
                    <SwipeableDrawer
                        open={open}
                        onClose={handleDrawerClose}
                    >
                        {list}
                    </SwipeableDrawer>
                </React.Fragment>
                        
            </nav>
        </React.Fragment>
    )
}

export default Header;