import { useState } from 'react'
import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useAppSelector } from '@/store/hooks'
import { cartTotalPrice } from '@/store/cart/cartSelector'
import { priceFormatter } from '@/utils/price-utils'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import type { Payment } from '@/services/api-checkout'

function PaymentForm() {
  const value = useAppSelector(cartTotalPrice)
  const amount = priceFormatter(value)
  const { setDelivery, setCheckout } = useCheckoutStep()
  
  const [formData, setFormData] = useState<Payment>({
    card: {
      name: '',
      number: '',
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === 'name' || name === 'number') {
      setFormData(prev => ({
        ...prev,
        card: {
          ...prev.card,
          [name]: value
        }
      }))
    } else if (name === 'cvv') {
      setFormData(prev => ({
        ...prev,
        card: {
          ...prev.card,
          code: parseInt(value) || 0
        }
      }))
    } else if (name === 'month' || name === 'year') {
      setFormData(prev => ({
        ...prev,
        card: {
          ...prev.card,
          expires: {
            ...prev.card.expires,
            [name]: parseInt(value) || 0
          }
        }
      }))
    }
  }

  return (
    <>
      <FormStyled>
        <Text as="title" $lgFontSize="md" $textLightTheme="secondary">
          Pagamento - Valor a pagar {amount}
        </Text>
        <Input 
          label="Nome no Cartão" 
          name="name"
          value={formData.card.name}
          onChange={handleInputChange}
          placeholder="Nome como está no cartão"
        />
        <div className="card-number">
          <Input 
            label="Número do Cartão" 
            name="number"
            value={formData.card.number}
            onChange={handleInputChange}
            mask="____ ____ ____ ____"
            placeholder="0000 0000 0000 0000"
          />
          <Input 
            label="CVV" 
            name="cvv"
            value={formData.card.code.toString()}
            onChange={handleInputChange}
            mask="___"
            placeholder="000"
          />
        </div>
        <div className="card-data">
          <Input 
            label="Mês de vencimento" 
            name="month"
            value={formData.card.expires.month.toString()}
            onChange={handleInputChange}
            mask="__"
            placeholder="MM"
          />
          <Input 
            label="Ano de vencimento" 
            name="year"
            value={formData.card.expires.year.toString()}
            onChange={handleInputChange}
            mask="____"
            placeholder="AAAA"
          />
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
