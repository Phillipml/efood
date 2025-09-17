import { Logo } from '@/components/ui/Brand'
import Text from '@/components/ui/Text'
import { Container, HeaderWrapper } from './styles'
import { useLocation } from 'react-router-dom'
import { RestaurantHeader } from './RestaurantHeader'

const Header = () => {
  const location = useLocation()
  const isRestaurant = location.pathname === '/restaurant'

  if (isRestaurant) {
    return <RestaurantHeader />
  }

  return (
    <HeaderWrapper>
      <Container>
        <Logo $lgRem={125} $smRem={125} />
        <Text
          as="title"
          $textColor="tertiary"
          $textDarkTheme="primary"
          $lgFontSize="xl"
          $alignCenter={true}
        >
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Text>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
