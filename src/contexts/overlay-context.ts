import { createContext } from 'react'

export type OverlayType = 'modal' | 'sideMenu' | null

export type OverlayContextType = {
  currentOverlay: OverlayType
  showModal: () => void
  showSideMenu: () => void
  hideOverlay: () => void
}

export const OverlayContext = createContext<OverlayContextType | undefined>(
  undefined
)
