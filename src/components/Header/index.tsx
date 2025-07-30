import { MainContainer } from '@/styles/reset'
import Logo from '@components/Logo'
import Text from '@components/Text'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <MainContainer>
        <Logo $lgPercentWidth={25} />
        <Text
          as="title"
          variant="secondary"
          $lgFontSize="xl"
          alignCenter={true}
        >
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Text>
      </MainContainer>
    </HeaderContainer>
  )
}

export default Header
