import { createContext, useState, type ReactNode } from 'react'
import type { Delivery, Payment } from '@/services/api-checkout'

interface CheckoutData {
  delivery?: Delivery
  payment?: Payment
}

interface CheckoutDataContextType {
  checkoutData: CheckoutData
  setDeliveryData: (delivery: Delivery) => void
  setPaymentData: (payment: Payment) => void
  clearCheckoutData: () => void
}

export const CheckoutDataContext = createContext<CheckoutDataContextType | undefined>(undefined)

export function CheckoutDataProvider({ children }: { children: ReactNode }) {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({})

  const setDeliveryData = (delivery: Delivery) => {
    setCheckoutData(prev => ({ ...prev, delivery }))
  }

  const setPaymentData = (payment: Payment) => {
    setCheckoutData(prev => ({ ...prev, payment }))
  }

  const clearCheckoutData = () => {
    setCheckoutData({})
  }

  return (
    <CheckoutDataContext.Provider value={{
      checkoutData,
      setDeliveryData,
      setPaymentData,
      clearCheckoutData
    }}>
      {children}
    </CheckoutDataContext.Provider>
  )
}

