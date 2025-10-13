import { useState } from 'react'
import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import type { Delivery } from '@/services/api-checkout'

function Delivery() {
  const { setCart, setPayment } = useCheckoutStep()
  const [formData, setFormData] = useState<Delivery>({
    receiver: '',
    address: {
      descripton: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === 'receiver') {
      setFormData(prev => ({
        ...prev,
        receiver: value
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: name === 'number' ? parseInt(value) || 0 : value
        }
      }))
    }
  }

  return (
    <>
      <FormStyled>
        <Text as="title" $lgFontSize="md">
          Entrega
        </Text>
        <Input 
          label="Quem irá receber" 
          name="receiver"
          value={formData.receiver}
          onChange={handleInputChange}
          placeholder="Digite o nome completo"
        />
        <Input 
          label="Endereço" 
          name="descripton"
          value={formData.address.descripton}
          onChange={handleInputChange}
          placeholder="Rua, avenida, etc."
        />
        <Input 
          label="Cidade" 
          name="city"
          value={formData.address.city}
          onChange={handleInputChange}
          placeholder="Nome da cidade"
        />
        <div className="cep">
          <Input 
            label="CEP" 
            name="zipCode"
            value={formData.address.zipCode}
            onChange={handleInputChange}
            mask="_____-___"
            placeholder="00000-000"
          />
          <Input 
            label="Número" 
            name="number"
            value={formData.address.number.toString()}
            onChange={handleInputChange}
            placeholder="123"
          />
        </div>
        <Input 
          label="Complemento (Opcional)" 
          name="complement"
          value={formData.address.complement || ''}
          onChange={handleInputChange}
          placeholder="Apartamento, casa, etc."
        />
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
