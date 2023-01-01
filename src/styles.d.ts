import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string>
    fontFamily: string[]
    primary: string
    secondary: string
    text: string
  }
}
