import type { Menu } from '@/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: Menu[]
}
const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})
export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
