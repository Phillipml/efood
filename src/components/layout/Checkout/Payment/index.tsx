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

function PaymentForm() {
  const value = useAppSelector(cartTotalPrice)
  const items = useAppSelector(cartItems)
  const amount = priceFormatter(value)
  const { setDelivery, setCheckout } = useCheckoutStep()
  const { checkoutData: savedCheckoutData, setPaymentData } = useCheckoutData()
  const [checkout, { isLoading }] = useCheckoutMutation()
  const [isSuccess, setIsSuccess] = useState(false)
  
  const initialValues: Payment = {
    card: {
      name: '',
      number: '',
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
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

      await checkout(requestData).unwrap()
      
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
                placeholder="Nome como está no cartão"
              />
              {errors.card?.name && touched.card?.name && (
                <div style={{ color: 'red', fontSize: '12px' }}>
                  {errors.card.name}
                </div>
              )}
              
              <div className="card-number">
                <Input 
                  label="Número do Cartão" 
                  name="card.number"
                  value={values.card.number}
                  onChange={handleChange}
                  mask="____ ____ ____ ____"
                  placeholder="0000 0000 0000 0000"
                />
                {errors.card?.number && touched.card?.number && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.card.number}
                  </div>
                )}
                
                <Input 
                  label="CVV" 
                  name="card.code"
                  value={values.card.code.toString()}
                  onChange={handleChange}
                  mask="___"
                  placeholder="000"
                />
                {errors.card?.code && touched.card?.code && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.card.code}
                  </div>
                )}
              </div>
              
              <div className="card-data">
                <Input 
                  label="Mês de vencimento" 
                  name="card.expires.month"
                  value={values.card.expires.month.toString()}
                  onChange={handleChange}
                  mask="__"
                  placeholder="MM"
                />
                {errors.card?.expires?.month && touched.card?.expires?.month && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.card.expires.month}
                  </div>
                )}
                
                <Input 
                  label="Ano de vencimento" 
                  name="card.expires.year"
                  value={values.card.expires.year.toString()}
                  onChange={handleChange}
                  mask="____"
                  placeholder="AAAA"
                />
                {errors.card?.expires?.year && touched.card?.expires?.year && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.card.expires.year}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => formikSubmit()}
                style={{
                  backgroundColor: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1
                }}
              >
                {isLoading ? 'Processando...' : isSuccess ? 'Pagamento realizado!' : 'Finalizar pagamento'}
              </button>
              
              <Button
                $buttonLightThemeColor="secondary"
                $buttonTextLightTheme="tertiary"
                onClick={() => setDelivery()}
              >
                Voltar para edição de endereço
              </Button>
          </FormStyled>
        )}
      </Formik>
    </>
  )
}

export default PaymentForm
