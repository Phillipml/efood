import { Logo } from '@/components/ui/Logo'
import Text from '@/components/ui/Text'
import { Container, HeaderWrapper } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo $lgVw={10} $mdVw={22} />
        <Text
          as="title"
          color="tertiary"
          darkTheme="primary"
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
