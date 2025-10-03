import type { RootState } from '..'
export const cartItems = (state: RootState) => state.cart.items
export const cartTotalItems = (state: RootState) => state.cart.items.length
export const cartTotalPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.preco, 0)
