import Logo from '@components/Logo'
import Text from '@components/Text'
import { Container, HeaderWrapper } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo $lgVw={10} $mdVw={22} />
        <Text
          as="title"
          variant="secondary"
          $lgFontSize="xl"
          alignCenter={true}
        >
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Text>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
