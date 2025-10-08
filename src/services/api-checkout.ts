export interface Product {
  product: number
  price: number
}
export interface Delivery {
  receiver: string

  address: {
    receiver: string
    descripton: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
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
