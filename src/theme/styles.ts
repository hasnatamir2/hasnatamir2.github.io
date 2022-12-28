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
    // Hero Section
    .hero-section {
        text-align: center;
    }

    .hero-text {
        text-align: left;
    }

`

export default GlobalStyle
