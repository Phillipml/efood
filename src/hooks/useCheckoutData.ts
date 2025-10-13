import { useContext } from 'react'
import { CheckoutDataContext } from '../contexts/checkout-data-context'

export function useCheckoutData() {
  const context = useContext(CheckoutDataContext)
  if (context === undefined) {
    throw new Error('useCheckoutData must be used within a CheckoutDataProvider')
  }
  return context
}
