import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#47b0a8',
    main: '#66fcf1',
    light: '#84fcf3'
  },
  secondary: {
    contrastText: white,
    dark: '#307166',
    main: "#45a292",
    light: '#6ab4a7'
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#c5c6c7',
    secondary: '#898a8b',
    link: '#1f2833'
  },
  background: {
    default: "#F4F6F8",
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
