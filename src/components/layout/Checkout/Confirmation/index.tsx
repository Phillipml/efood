import Text from '@/components/ui/Text'
import { CheckoutText } from './styles'
import Button from '@/components/ui/Button'

function Checkout() {
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
      >
        Concluir
      </Button>
    </CheckoutText>
  )
}

export default Checkout
