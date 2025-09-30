import { createContext } from 'react'

export type OverlayContextType = {
  isShowing: boolean
  setOverlay: () => void
}

export const OverlayContext = createContext<OverlayContextType | undefined>(
  undefined
)
