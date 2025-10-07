import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'

function PaymentForm() {
  return (
    <>
      <FormStyled>
        <Text as="title" $lgFontSize="md">
          Entrega
        </Text>
        <Input label="Nome" />
        <div className="cep">
          <Input label="Número do Cartão" />
          <Input label="CVV" />
        </div>
        <div className="cep">
          <Input label="Mês de vencimento" />
          <Input label="Ano de vencimento" />
        </div>

        <Button
          $buttonLightThemeColor="secondary"
          $buttonTextLightTheme="tertiary"
        >
          Finalizar pagamento
        </Button>
        <Button
          $buttonLightThemeColor="secondary"
          $buttonTextLightTheme="tertiary"
        >
          Voltar para edição de endereço
        </Button>
      </FormStyled>
    </>
  )
}

export default PaymentForm
