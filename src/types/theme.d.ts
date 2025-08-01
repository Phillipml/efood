import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
    quinary: string
  }
}
export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'

export type ColorsVariants = {
  color?: Variant
  darkTheme?: Variant
  lightTheme?: Variant
}
