import Text from '@/components/ui/Text'
import { CheckoutText } from './styles'
import Button from '@/components/ui/Button'
import { useAppDispatch } from '@/store/hooks'
import { clearCart } from '@/store/cart/cartSlice'
import { useOverlay } from '@/hooks/useOverlay'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'

function Checkout() {
  const dispatch =useAppDispatch()
  const {setCart} = useCheckoutStep()
  const {hideOverlay} = useOverlay()

  const confirmationHandle = () => {
    dispatch(clearCart())
    setCart()
    hideOverlay()
  }

  return (
    <CheckoutText>
      <Text as="title" $lgFontSize="md">
        Pedido realizado - ORDER_ID
      </Text>
      <div>
        <Text>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </Text>
        <Text>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </Text>
        <Text>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </Text>
        <Text>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Text>
      </div>
      <Button
        $buttonLightThemeColor="secondary"
        $buttonTextLightTheme="tertiary"
        onClick={confirmationHandle}
      >
        Concluir
      </Button>
    </CheckoutText>
  )
}

export default Checkout
