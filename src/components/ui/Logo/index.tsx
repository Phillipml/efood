import type { VwProps } from '@/types'
import logo from '@assets/images/logo.svg'
import icon from '@assets/images/icon.svg'
import { IconStyled, LogoStyled } from './styles'

export const Logo = ({ $lgVw, $mdVw, $smVw }: VwProps) => {
  return (
    <LogoStyled
      src={logo}
      alt="Efood logo"
      $lgVw={$lgVw ?? 100}
      $mdVw={$mdVw ?? 100}
      $smVw={$smVw ?? 100}
    />
  )
}

export const Icon = ({ $lgVw, $mdVw, $smVw }: VwProps) => {
  return (
    <IconStyled
      src={icon}
      alt="Efood logo"
      $lgVw={$lgVw ?? 100}
      $mdVw={$mdVw ?? 100}
      $smVw={$smVw ?? 100}
    />
  )
}
