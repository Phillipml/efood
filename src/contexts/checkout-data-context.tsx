import { useState, type ReactNode } from 'react'
import { CheckoutDataContext, type CheckoutData } from './checkout-data-context'
import type { Delivery, Payment } from '../services/api-checkout'

export function CheckoutDataProvider({ children }: { children: ReactNode }) {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({})

  const setDeliveryData = (delivery: Delivery) => {
    setCheckoutData(prev => ({ ...prev, delivery }))
  }

  const setPaymentData = (payment: Payment) => {
    setCheckoutData(prev => ({ ...prev, payment }))
  }

  const setOrderId = (orderId: string) => {
    setCheckoutData(prev => ({ ...prev, orderId }))
  }

  const clearCheckoutData = () => {
    setCheckoutData({})
  }

  return (
    <CheckoutDataContext.Provider value={{
      checkoutData,
      setDeliveryData,
      setPaymentData,
      setOrderId,
      clearCheckoutData
    }}>
      {children}
    </CheckoutDataContext.Provider>
  )
}

