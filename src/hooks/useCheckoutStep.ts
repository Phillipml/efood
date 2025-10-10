import { CheckoutContext } from '@/contexts/checkout-context'
import { useContext } from 'react'

export const useCheckoutStep = () => {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error(
      'useCheckoutStep deve ser usado dentro de um CheckoutProvider'
    )
  }
  return {
    currentStep: context.currentStep,
    setCart: context.setCart,
    setDelivery: context.setDelivery,
    setPayment: context.setPayment,
    setCheckout: context.setCheckout
  }
}
