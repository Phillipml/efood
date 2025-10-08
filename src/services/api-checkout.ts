import type { Delivery } from '../types/delivery'
import type { Payment } from '../types/payment'

export interface CheckoutProduct {
  id: number
  price: number
}

export interface CheckoutRequest {
  products: CheckoutProduct[]
  delivery: Delivery
  payment: Payment
}

export async function postCheckout(checkoutData: CheckoutRequest) {
  const response = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(checkoutData),
  })

  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`)
  }

  return response.json()
}
