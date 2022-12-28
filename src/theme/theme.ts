import { DefaultTheme } from 'styled-components'

const darkTheme: DefaultTheme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fontFamily: ['Lato', 'sans-serif'],
  primary: '#000',
  secondary: '#8E54E9',
  text: '#F6F7F9',
}

const lightTheme: DefaultTheme = {
  primary: '#fff',
  secondary: '#8E54E9',
  text: '#000',
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fontFamily: ['Lato', 'sans-serif'],
}

export { darkTheme, lightTheme }
