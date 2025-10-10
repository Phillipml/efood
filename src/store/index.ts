import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import { checkoutApi } from '@/services/api-checkout'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(checkoutApi.middleware)
  }
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
