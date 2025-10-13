import { Formik, Form } from 'formik'
import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import type { Delivery as DeliveryType } from '@/services/api-checkout'
import { deliverySchema } from '@/utils/validation-schemas'
import { useCheckoutData } from '@/hooks/useCheckoutData'

function Delivery() {
  const { setCart, setPayment } = useCheckoutStep()
  const { setDeliveryData } = useCheckoutData()
  
  const initialValues: DeliveryType = {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    }
  }

  const handleSubmit = (values: DeliveryType) => {
    setDeliveryData(values)
    setPayment()
  }
  
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={deliverySchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit: formikSubmit }) => (
          <Form>
            <FormStyled>
              <Text as="title" $lgFontSize="md" $textLightTheme='secondary'>
                Entrega
              </Text>
              
              <Input 
                label="Quem irá receber" 
                name="receiver"
                value={values.receiver}
                onChange={handleChange}
                $hasError={!!(errors.receiver && touched.receiver)}
                />
           
              
              <Input 
                label="Endereço" 
                name="address.description"
                value={values.address.description}
                onChange={handleChange}
                $hasError={!!(errors.address?.description && touched.address?.description)}
              />

              <Input 
                label="Cidade" 
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
                $hasError={!!(errors.address?.city && touched.address?.city)}
              />
            
              
              <div className="cep">
                <Input 
                  label="CEP" 
                  name="address.zipCode"
                  value={values.address.zipCode}
                  onChange={handleChange}
                  mask="_____-___"
                  $hasError={!!(errors.address?.zipCode && touched.address?.zipCode)}
                />
            
                <Input 
                  label="Número" 
                  name="address.number"
                  value={values.address.number}
                  onChange={handleChange}
                  $hasError={!!(errors.address?.number && touched.address?.number)}
                />
                
              </div>
              
              <Input 
                label="Complemento (Opcional)" 
                name="address.complement"
                value={values.address.complement || ''}
                onChange={handleChange}
                $hasError={!!(errors.address?.complement && touched.address?.complement)}
              />
              
              <Button
                $buttonLightThemeColor="secondary"
                $buttonTextLightTheme="tertiary"
                onClick={() => formikSubmit()}
              >
                Continuar com o pagamento
              </Button>
              
              <Button
                $buttonLightThemeColor="secondary"
                $buttonTextLightTheme="tertiary"
                onClick={() => setCart()}
              >
                Voltar para o carrinho
              </Button>
            </FormStyled>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Delivery
