import { createContext } from 'react'

export type CheckoutType = 'cart' | 'payment' | 'delivery' | 'checkout' | null

export type CheckoutStepType = {
  currentStep: CheckoutType
  setCart: () => void
  setDelivery: () => void
  setPayment: () => void
  setCheckout: () => void
}

export const CheckoutContext = createContext<CheckoutStepType | undefined>(
  undefined
)
