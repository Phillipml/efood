import type { ReactNode } from 'react'
import { OverlayProvider } from './OverlayProvider'
import { Provider } from 'react-redux'
import { store } from '@/store'
import CheckoutProvider from './checkoutProvider'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <OverlayProvider>
        <CheckoutProvider>{children}</CheckoutProvider>
      </OverlayProvider>
    </Provider>
  )
}
