export interface DeliveryAddress {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}
export interface DeliveryForm {
  receiver: string
  address: DeliveryAddress
}
export interface PaymentCard {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}
export interface PaymentForm {
  card: PaymentCard
}
export interface CheckoutProduct {
  id: number
  price: number
}
export interface CheckoutOrder {
  products: CheckoutProduct[]
  delivery: DeliveryForm
  payment: PaymentForm
}
export interface CheckoutResponse {
  orderId: string
  delivery: DeliveryForm
  products: Array<{
    id: number
    name: string
    price: number
  }>
  total: number
}

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'
