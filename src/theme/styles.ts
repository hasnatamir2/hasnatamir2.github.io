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

    code {
        background: linear-gradient(
            112.83deg,
            rgba(0, 0, 0, 0.6) 3.66%,
            rgba(0, 0, 0, 0.1) 100%
        );
        backdrop-filter: blur(25px);
        border-radius: 4px;
        padding: 2px 4px;
        font-size: 16px;
    }



    // Custom Styles
    .custom-cursor {
        border: 2px solid #121212;
        border-radius: 100%;
        position: fixed;
        transform: translate(-50%, -50%);
        background: linear-gradient(180deg, #8E54E9 0%, #E29587 100%);
        filter: blur(150px);
        width: 469px;
        height: 469px;
        z-index: -2;
    }

    .layout {
        
    }
    .navbar {
        background: linear-gradient(112.83deg, rgba(0, 0, 0, 0.6) 3.66%, rgba(0, 0, 0, 0.1) 100%);
        backdrop-filter: blur(25px);
        color: ${(props) => props.theme.text};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        padding: 10px 160px;
        padding-top: 15px;
        z-index: 1000;
        
    }
    .navbar-logo {
        display: flex;
    }
    .navbar-links {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    
    .footer {
        width: 100%;
        height: 50px;
        background: linear-gradient(112.83deg, rgba(0, 0, 0, 0.6) 3.66%, rgba(0, 0, 0, 0.1) 100%);
        backdrop-filter: blur(25px);
        color: ${(props) => props.theme.text};
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            font-size: 12px;
        }
    }

    .primary-button {

    }

    // Home container
    .home-container {
        padding: 0 160px;
    }

    // Sections
    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .gradient-text {
        font-size: 12px !important;
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
        min-height: 90vh;
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

    .section-content {
        width: 45%;
    }

    // Contact Section
    .contact-section {
        min-height: 45vh;
        .social-buttons {
            margin-top: 100px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 40%;
        }
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
        font-weight: 400;
        letter-spacing: 1.25px;
        font-size: 16px;
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

    //

`

export default GlobalStyle
