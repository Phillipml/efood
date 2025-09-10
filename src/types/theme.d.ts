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
  $defaultColor?: Variant
  $darkTheme?: Variant
  $lightTheme?: Variant
}

export type TextColorsVariants = {
  $textColor?: Variant
  $textDarkTheme?: Variant
  $textLightTheme?: Variant
}