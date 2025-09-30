import type { ReactNode } from 'react'
import { OverlayProvider } from './OverlayProvider'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <OverlayProvider>{children}</OverlayProvider>
}
