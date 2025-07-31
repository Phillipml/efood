import type { VwProps } from '@/types/sizes'
import logo from '@assets/images/logo.svg'
import { LogoStyled } from './styles'

const Logo = ({ $lgVw, $mdVw, $smVw }: VwProps) => {
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

export default Logo
