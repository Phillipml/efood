import type { FontSizeProps, PercentProps, Variant } from '@/types'
import { ButtonStyled } from './styles'
export type ButtonTypes = {
  children?: string
  $buttonColor?: Variant
  $buttonDarkThemeColor?: Variant
  $buttonLightThemeColor?: Variant
  $buttonTextColor?: Variant
  $buttonTextDarkTheme?: Variant
  $buttonTextLightTheme?: Variant
  onClick?: () => void
} & PercentProps &
  FontSizeProps
const Button = ({
  children = 'Texto Botão',
  $lgFontSize = 'md',
  $mdFontSize,
  $smFontSize,
  $lgPercent,
  $mdPercent,
  $smPercent,
  $buttonColor = 'tertiary',
  $buttonDarkThemeColor,
  $buttonLightThemeColor,
  $buttonTextColor = 'secondary',
  $buttonTextDarkTheme,
  $buttonTextLightTheme,
  onClick
}: ButtonTypes) => {
  return (
    <ButtonStyled
      $lgFontSize={$lgFontSize}
      $mdFontSize={$mdFontSize}
      $smFontSize={$smFontSize}
      $lgPercent={$lgPercent}
      $mdPercent={$mdPercent}
      $smPercent={$smPercent}
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
