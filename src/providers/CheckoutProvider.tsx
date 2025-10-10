import { CheckoutContext, type CheckoutType } from '@/contexts/checkout-context'
import React, { useState } from 'react'

function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<CheckoutType | null>('cart')
  const setCart = () => setStep('cart')
  const setDelivery = () => setStep('delivery')
  const setPayment = () => setStep('payment')
  const setCheckout = () => setStep('checkout')
  const currentStep = step
  return (
    <CheckoutContext.Provider
      value={{ currentStep, setCart, setDelivery, setPayment, setCheckout }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider
