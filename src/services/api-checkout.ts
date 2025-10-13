import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number
  price: number
}
export interface Address {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}
export interface Delivery {
  receiver: string
  address: Address
}
export interface Card {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}
export interface Payment {
  card: Card
}
export interface CheckoutRequest {
  products: Product[]
  delivery: Delivery
  payment: Payment
}
export interface CheckoutResponse {
  success: boolean
  message?: string
  orderId?: string
}

export const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app'
  }),
  endpoints: (builder) => ({
    checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (body) => ({
        url: '/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})
export const { useCheckoutMutation } = checkoutApi
