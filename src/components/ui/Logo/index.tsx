import type { RemProps } from '@/types'
import logo from '@assets/images/logo.svg'
import icon from '@assets/images/icon.svg'
import { IconStyled, LogoStyled } from './styles'
import { Link } from 'react-router-dom'

export const Logo = ({ $lgRem, $mdRem, $smRem }: RemProps) => {
  return (
    <Link to={'/'}>
      <LogoStyled
        src={logo}
        alt="Efood logo"
        $lgRem={$lgRem ?? 36}
        $mdRem={$mdRem ?? 36}
        $smRem={$smRem ?? 36}
      />
    </Link>
  )
}

export const Icon = ({ $lgRem, $mdRem, $smRem }: RemProps) => {
  return (
    <IconStyled
      src={icon}
      alt="Efood logo"
      $lgRem={$lgRem ?? 36}
      $mdRem={$mdRem ?? 36}
      $smRem={$smRem ?? 36}
    />
  )
}
