import * as S from './styles'
import Button from '../../Button'
import Text from '@/components/ui/Text'
import { CiTrash } from 'react-icons/ci'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { cartItems, cartTotalPrice } from '@/store/cart/cartSelector'
import { priceFormatter } from '@/utils/price-utils'
import { removeItem } from '@/store/cart/cartSlice'

function Cart() {
  const cart = useAppSelector(cartItems)
  const totalPrice = useAppSelector(cartTotalPrice)
  const dispatch = useAppDispatch()
  const amount = priceFormatter(totalPrice)

  return (
    <>
      {' '}
      <S.CartWrapper>
        {cart.length > 0 &&
          cart.map((item, k) => (
            <S.CartItem key={k}>
              <S.RemoveButton onClick={() => dispatch(removeItem(item.id))}>
                <CiTrash />
              </S.RemoveButton>
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
            </S.CartItem>
          ))}
      </S.CartWrapper>
      <S.AmountValue>
        <Text
          as="title"
          $lgFontSize="lg"
          $textLightTheme="secondary"
          $textDarkTheme="tertiary"
        >
          Valor Total
        </Text>
        <Text
          as="title"
          $lgFontSize="lg"
          $textLightTheme="secondary"
          $textDarkTheme="tertiary"
        >
          {amount}
        </Text>
      </S.AmountValue>
      <Button
        $buttonLightThemeColor="secondary"
        $buttonTextLightTheme="tertiary"
      >
        Continuar com a entrega
      </Button>
    </>
  )
}

export default Cart
