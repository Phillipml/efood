import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'

function Delivery() {
  const { setCart, setPayment } = useCheckoutStep()
  return (
    <>
      <FormStyled>
        <Text as="title" $lgFontSize="md">
          Entrega
        </Text>
        <Input label="Quem irá receber" />
        <Input label="Endereço" />
        <Input label="Cidade" />
        <div className="cep">
          <Input label="CEP" />
          <Input label="Número" />
        </div>
        <Input label="Complemento (Opcional)" />
        <Button
          $buttonLightThemeColor="secondary"
          $buttonTextLightTheme="tertiary"
          onClick={() => setPayment()}
        >
          Continuar com o pagamento
        </Button>
        <Button
          $buttonLightThemeColor="secondary"
          $buttonTextLightTheme="tertiary"
          onClick={() => setCart()}
        >
          Voltar para carrinho
        </Button>
      </FormStyled>
    </>
  )
}

export default Delivery
