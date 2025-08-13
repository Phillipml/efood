import type { FontSizeProps, PercentProps } from '@/types'
import { ButtonStyled } from './styles'
export type ButtonTypes = {
  children: string
  inverted?: boolean
} & PercentProps &
  FontSizeProps
const Button = ({
  children,
  $lgFontSize = 'md',
  $mdFontSize,
  $smFontSize,
  $lgPercent,
  $mdPercent,
  $smPercent,
  inverted = false
}: ButtonTypes) => {
  return (
    <ButtonStyled
      $lgFontSize={$lgFontSize}
      $mdFontSize={$mdFontSize}
      $smFontSize={$smFontSize}
      $lgPercent={$lgPercent}
      $mdPercent={$mdPercent}
      $smPercent={$smPercent}
      inverted={inverted}
    >
      {children}
    </ButtonStyled>
  )
}
export default Button
