import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
  }
}
export type ColorsVariants = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}
