import type { FontSizeProps, Variant } from '@/types'
import { ButtonStyled } from './styles'
export type ButtonTypes = {
  children?: React.ReactNode
  $buttonColor?: Variant
  $buttonDarkThemeColor?: Variant
  $buttonLightThemeColor?: Variant
  $buttonTextColor?: Variant
  $buttonTextDarkTheme?: Variant
  $buttonTextLightTheme?: Variant
  $lgButtonPercent?: number
  $mdButtonPercent?: number
  $smButtonPercent?: number
  type?: 'button' | 'submit'
  onClick?: () => void
} & FontSizeProps
const Button = ({
  children = 'Texto Botão',
  $lgFontSize = 'md',
  $mdFontSize,
  $smFontSize,
  $lgButtonPercent,
  $mdButtonPercent,
  $smButtonPercent,
  $buttonColor = 'tertiary',
  $buttonDarkThemeColor,
  $buttonLightThemeColor,
  $buttonTextColor = 'secondary',
  $buttonTextDarkTheme,
  $buttonTextLightTheme,
  type='button',
  onClick
}: ButtonTypes) => {
  return (
    <ButtonStyled
    type={type}
      $lgFontSize={$lgFontSize}
      $mdFontSize={$mdFontSize}
      $smFontSize={$smFontSize}
      $lgButtonPercent={$lgButtonPercent}
      $mdButtonPercent={$mdButtonPercent}
      $smButtonPercent={$smButtonPercent}
      $buttonColor={$buttonColor}
      $buttonDarkThemeColor={$buttonDarkThemeColor}
      $buttonLightThemeColor={$buttonLightThemeColor}
      $buttonTextColor={$buttonTextColor}
      $buttonTextDarkTheme={$buttonTextDarkTheme}
      $buttonTextLightTheme={$buttonTextLightTheme}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}
export default Button
