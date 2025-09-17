import { Logo } from '@/components/ui/Brand'
import Text from '@/components/ui/Text'
import { Container } from './styles'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { FooterWraper } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWraper>
      <Container>
        <div>
          <Logo $lgRem={125} />
          <div>
            <Link to="/">
              <ImInstagram />
            </Link>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <Text
          $textColor="tertiary"
          $textDarkTheme="primary"
          $alignCenter={true}
        >
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsibilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </Container>
    </FooterWraper>
  )
}
export default Footer
