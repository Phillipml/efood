import { Formik } from 'formik'
import Input from '@/components/ui/Input'
import { FormStyled } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { useAppSelector } from '@/store/hooks'
import { cartTotalPrice, cartItems } from '@/store/cart/cartSelector'
import { priceFormatter } from '@/utils/price-utils'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import type { Payment } from '@/services/api-checkout'
import { paymentSchema } from '@/utils/validation-schemas'
import { useCheckoutData } from '@/hooks/useCheckoutData'
import { useCheckoutMutation } from '@/services/api-checkout'
import { useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { useTheme } from 'styled-components'
import { setColor } from '@/utils/color-utils'

function PaymentForm() {
  const value = useAppSelector(cartTotalPrice)
  const items = useAppSelector(cartItems)
  const amount = priceFormatter(value)
  const { setDelivery, setCheckout } = useCheckoutStep()
  const { checkoutData: savedCheckoutData, setPaymentData, setOrderId } = useCheckoutData()
  const [checkout, { isLoading }] = useCheckoutMutation()
  const [isSuccess, setIsSuccess] = useState(false)
  const theme = useTheme()
  const initialValues: Payment = {
    card: {
      name: '',
      number: '',
      code: '',
      expires: {
        month: '',
        year: ''
      }
    }
  }
  const color = ()=>{
    const getColor = setColor(theme, { light: 'tertiary', dark: 'secondary' })
    const returnColor = getColor?.replace(';', '')
    return returnColor
  }

  const handleSubmit = async (values: Payment) => {
    try {
      setPaymentData(values)
      
      const products = items.map(item => ({
        id: item.id,
        price: item.preco
      }))

      const requestData = {
        products,
        delivery: savedCheckoutData.delivery!,
        payment: values
      }

      const response = await checkout(requestData).unwrap()
      
   
      
      if (response && response.orderId) {
        setOrderId(response.orderId)
      }
      
      setIsSuccess(true)
      setTimeout(() => {
        setCheckout()
      }, 2000)
    } catch (error: unknown) {
      console.error('Erro no checkout:', error)
      const errorObj = error as { data?: { message?: string }; message?: string }
      const errorMessage = errorObj?.data?.message || errorObj?.message || 'Erro desconhecido no processamento'
      alert(`Erro: ${errorMessage}`)
    }
  }

  const handleFormSubmit = (values: Payment) => {
    handleSubmit(values)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={paymentSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit: formikSubmit }) => (
          <FormStyled>
              <Text as="title" $lgFontSize="md" $textLightTheme="secondary">
                Pagamento - Valor a pagar {amount}
              </Text>
              
              <Input 
                label="Nome no Cartão" 
                name="card.name"
                value={values.card.name}
                onChange={handleChange}
                $hasError={!!(errors.card?.name && touched.card?.name)}
              />
            
              
              <div className="card-number">
                <Input 
                  label="Número do Cartão" 
                  name="card.number"
                  value={values.card.number}
                  onChange={handleChange}
                  mask="____ ____ ____ ____"
                  $hasError={!!(errors.card?.number && touched.card?.number)}
                />
              
                <Input 
                  label="CVV" 
                  name="card.code"
                  value={values.card.code}
                  onChange={handleChange}
                  mask="___"
                  $hasError={!!(errors.card?.code && touched.card?.code)}
                />

              </div>
              
              <div className="card-data">
                <Input 
                  label="Mês de vencimento" 
                  name="card.expires.month"
                  value={values.card.expires.month}
                  onChange={handleChange}
                  mask="__"
                  $hasError={!!(errors.card?.expires?.month && touched.card?.expires?.month)}
                />

                
                <Input 
                  label="Ano de vencimento" 
                  name="card.expires.year"
                  value={values.card.expires.year}
                  onChange={handleChange}
                  mask="____"
                  $hasError={!!(errors.card?.expires?.year && touched.card?.expires?.year)}
                    />
            
              </div>

              <Button
                $buttonLightThemeColor="secondary"
                $buttonTextDarkTheme="secondary"
                $buttonTextLightTheme="tertiary"
                onClick={() => formikSubmit()}
               
              >
                {isLoading ||  isSuccess ? <BeatLoader color={color()} />: 'Finalizar pagamento'}
              </Button>
              
              <Button
                $buttonLightThemeColor="secondary"
                $buttonTextLightTheme="tertiary"
                onClick={() => setDelivery()}
              >
                Voltar para a edição de endereço
              </Button>
          </FormStyled>
        )}
      </Formik>
    </>
  )
}

export default PaymentForm
