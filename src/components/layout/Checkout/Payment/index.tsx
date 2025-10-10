import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useAppSelector } from '@/store/hooks'
import { cartTotalPrice } from '@/store/cart/cartSelector'
import { priceFormatter } from '@/utils/price-utils'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'

function PaymentForm() {
  const value = useAppSelector(cartTotalPrice)
  const amount = priceFormatter(value)
  const { setDelivery, setCheckout } = useCheckoutStep()
  return (
    <>
      <FormStyled>
        <Text as="title" $lgFontSize="md" $textLightTheme="secondary">
          Pagamento - Valor a pagar {amount}
        </Text>
        <Input label="Nome" />
        <div className="card-number">
          <Input label="Número do Cartão" />
          <Input label="CVV" />
        </div>
        <div className="card-data">
          <Input label="Mês de vencimento" />
          <Input label="Ano de vencimento" />
        </div>

        <Button
          $buttonLightThemeColor="secondary"
          $buttonTextLightTheme="tertiary"
          onClick={() => setCheckout()}
        >
          Finalizar pagamento
        </Button>
        <Button
          $buttonLightThemeColor="secondary"
          $buttonTextLightTheme="tertiary"
          onClick={() => setDelivery()}
        >
          Voltar para edição de endereço
        </Button>
      </FormStyled>
    </>
  )
}

export default PaymentForm
