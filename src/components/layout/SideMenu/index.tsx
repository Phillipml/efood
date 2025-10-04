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
import { CiTrash } from 'react-icons/ci'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { cartItems, cartTotalPrice } from '@/store/cart/cartSelector'
import { priceFormatter } from '@/utils/price-utils'
import { removeItem } from '@/store/cart/cartSlice'

function SideMenu() {
  const cart = useAppSelector(cartItems)
  const totalPrice = useAppSelector(cartTotalPrice)
  const dispatch = useAppDispatch()
  const amount = priceFormatter(totalPrice)

  return (
    <Overlay $justifyContent="end" type="sideMenu">
      <SideMenuStyled>
        <CartWrapper>
          {cart.length > 0 &&
            cart.map((item, k) => (
              <CartItem key={k}>
                <RemoveButton onClick={() => dispatch(removeItem(item.id))}>
                  <CiTrash />
                </RemoveButton>
                <img src={item.foto} width={50} alt="oi" />
                <div>
                  <Text
                    as="title"
                    $lgFontSize="lg"
                    $textLightTheme="tertiary"
                    $textDarkTheme="secondary"
                    $smFontSize="lg"
                  >
                    {item.nome}
                  </Text>

                  <Text $textLightTheme="tertiary" $textDarkTheme="secondary">
                    {priceFormatter(item.preco)}
                  </Text>
                </div>
              </CartItem>
            ))}
        </CartWrapper>
        <AmountValue>
          <Text as="title" $lgFontSize="lg">
            Valor Total
          </Text>
          <Text as="title" $lgFontSize="lg">
            {amount}
          </Text>
        </AmountValue>
        <Button>Continuar com a entrega</Button>
      </SideMenuStyled>
    </Overlay>
  )
}

export default SideMenu
