import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${(props) => props.theme.fontFamily.join(',')};
        background-color: ${(props) => props.theme.primary};
        margin: 0;
    }
    a {
        color: ${(props) => props.theme.text};
        text-decoration: none;
        &:hover {
            color: ${(props) => props.theme.text};
        }
    }



    .layout {
        padding: 0 160px;
    }
    .navbar {
        width: 100%;
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.text};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        padding: 30px 0;
        z-index: 10000;
    }
    .navbar-logo {
        display: flex;
    }
    .navbar-links {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    .nav-item {
        margin-left: 56px;
        text-transform: capitalize;
        color: ${(props) => props.theme.text};
        text-decoration: none;
        &::after {
            content: '';
            display: block;
            opacity: 0;
            width: 50%;
            height: 2px;
            background-color: ${({ theme }) => theme.text};
            margin-top: 8px;
            transition: 250ms ease;
        }
        &:hover {
            &::after {
                opacity: 1;
                transition: 250ms ease;               
            }
        }
    }
    .footer {
        width: 100%;
        height: 50px;
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.text};
        bottom: 0;
        text-align: center;
    }


    // Sections
    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .gradient-text {
        font-size: 12px;
        line-height: 20px;
        /* identical to box height, or 167% */

        text-transform: uppercase;

        /* Gradients/P-B */

        background: linear-gradient(90deg, #8E54E9 0%, #E29587 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    // Hero Section
    .hero-section {
        text-align: center;
        min-height: 85vh;
    }

    .hero-text {
        text-align: left;
    }

    // Portflolio Section
    .portfolio-section {
        min-height: 85vh;
    }
    
    // Skills Section
    .skill-section {
        min-height: 85vh;
        display: flex;
        justify-content: space-between;

    }

    // Text sphere
    .text-shpere {
        position: relative;
        top: 0;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tagcloud {
        display: inline-block;
        top: 0;
        left: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        letter-spacing: 0.0625em;
        font-size: 1.3em;
    }

    /* Change color of each text in sphere on hover   */
    .tagcloud--item {
        background: linear-gradient(90deg, #8E54E9 0%, #E29587 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-transform: capitalize;
    }

    .tagcloud--item:hover {
    }

`

export default GlobalStyle
