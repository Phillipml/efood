import { Formik, Form } from 'formik'
import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import type { Delivery } from '@/services/api-checkout'
import { deliverySchema } from '@/utils/validation-schemas'

function Delivery() {
  const { setCart, setPayment } = useCheckoutStep()
  
  const initialValues: Delivery = {
    receiver: '',
    address: {
      descripton: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  }

  const handleSubmit = (values: Delivery) => {
    console.log('Dados do formulário:', values)
    setPayment()
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={deliverySchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <FormStyled>
              <Text as="title" $lgFontSize="md">
                Entrega
              </Text>
              
              <Input 
                label="Quem irá receber" 
                name="receiver"
                value={values.receiver}
                onChange={handleChange}
                placeholder="Digite o nome completo"
              />
              {errors.receiver && touched.receiver && (
                <div style={{ color: 'red', fontSize: '12px' }}>
                  {errors.receiver}
                </div>
              )}
              
              <Input 
                label="Endereço" 
                name="address.descripton"
                value={values.address.descripton}
                onChange={handleChange}
                placeholder="Rua, avenida, etc."
              />
              {errors.address?.descripton && touched.address?.descripton && (
                <div style={{ color: 'red', fontSize: '12px' }}>
                  {errors.address.descripton}
                </div>
              )}
              
              <Input 
                label="Cidade" 
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
                placeholder="Nome da cidade"
              />
              {errors.address?.city && touched.address?.city && (
                <div style={{ color: 'red', fontSize: '12px' }}>
                  {errors.address.city}
                </div>
              )}
              
              <div className="cep">
                <Input 
                  label="CEP" 
                  name="address.zipCode"
                  value={values.address.zipCode}
                  onChange={handleChange}
                  mask="_____-___"
                  placeholder="00000-000"
                />
                {errors.address?.zipCode && touched.address?.zipCode && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.address.zipCode}
                  </div>
                )}
                
                <Input 
                  label="Número" 
                  name="address.number"
                  value={values.address.number.toString()}
                  onChange={handleChange}
                  placeholder="123"
                />
                {errors.address?.number && touched.address?.number && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.address.number}
                  </div>
                )}
              </div>
              
              <Input 
                label="Complemento (Opcional)" 
                name="address.complement"
                value={values.address.complement || ''}
                onChange={handleChange}
                placeholder="Apartamento, casa, etc."
              />
              
              <Button
                $buttonLightThemeColor="secondary"
                $buttonTextLightTheme="tertiary"
                onClick={() => handleSubmit(values)}
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
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Delivery
