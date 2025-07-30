import type { PercentProps } from '@/types/sizes'
import logo from '@assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { LogoStyled } from './styles'

const Logo = ({
  $lgPercentWidth,
  $mdPercentWidth,
  $smPercentWidth
}: PercentProps) => {
  return (
    <Link to="/">
      <LogoStyled
        src={logo}
        alt="Efood logo"
        $lgPercentWidth={$lgPercentWidth}
        $mdPercentWidth={$mdPercentWidth}
        $smPercentWidth={$smPercentWidth}
      />
    </Link>
  )
}

export default Logo
