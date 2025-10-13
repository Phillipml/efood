import { createContext } from 'react'
import type { Delivery, Payment } from '@/services/api-checkout'

interface CheckoutData {
  delivery?: Delivery
  payment?: Payment
  orderId?: string
}

interface CheckoutDataContextType {
  checkoutData: CheckoutData
  setDeliveryData: (delivery: Delivery) => void
  setPaymentData: (payment: Payment) => void
  setOrderId: (orderId: string) => void
  clearCheckoutData: () => void
}

export const CheckoutDataContext = createContext<CheckoutDataContextType | undefined>(undefined)

export type { CheckoutData, CheckoutDataContextType }
