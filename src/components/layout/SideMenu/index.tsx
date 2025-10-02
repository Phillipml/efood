import Button from '@/components/ui/Button'
import Overlay from '../Overlay'
import {
  AmountValue,
  CartItem,
  CartWrapper,
  RemoveButton,
  SideMenuStyled
} from './styles'
import Text from '@/components/ui/Text'
import foto from '@/assets/images/laDolce.png'
import { CiTrash } from 'react-icons/ci'

function SideMenu() {
  return (
    <Overlay $justifyContent="end" type="sideMenu">
      <SideMenuStyled>
        <CartWrapper>
          <CartItem>
            <RemoveButton>
              <CiTrash />
            </RemoveButton>
            <img src={foto} width={50} alt="oi" />
            <div>
              <Text
                as="title"
                $lgFontSize="lg"
                $textLightTheme="tertiary"
                $textDarkTheme="secondary"
                $smFontSize="lg"
              >
                Titulo
              </Text>

              <Text $textLightTheme="tertiary" $textDarkTheme="secondary">
                R$00,00
              </Text>
            </div>
          </CartItem>
          <CartItem>
            <RemoveButton>
              <CiTrash />
            </RemoveButton>
            <img src={foto} width={50} alt="oi" />
            <div>
              <Text
                as="title"
                $lgFontSize="lg"
                $textLightTheme="tertiary"
                $textDarkTheme="secondary"
                $smFontSize="lg"
              >
                Titulo
              </Text>

              <Text $textLightTheme="tertiary" $textDarkTheme="secondary">
                R$00,00
              </Text>
            </div>
          </CartItem>
        </CartWrapper>
        <AmountValue>
          <Text as="title" $lgFontSize="lg">
            Valor Total
          </Text>
          <Text as="title" $lgFontSize="lg">
            R$00,00
          </Text>
        </AmountValue>
        <Button>Continuar com a entrega</Button>
      </SideMenuStyled>
    </Overlay>
  )
}

export default SideMenu
