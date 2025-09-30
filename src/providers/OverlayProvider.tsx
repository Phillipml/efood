import { useState, type ReactNode } from 'react'
import { OverlayContext } from '../contexts/overlay-context'

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isShowing, setIsShowing] = useState(false)
  const setOverlay = () => setIsShowing(!isShowing)
  
  return (
    <OverlayContext.Provider value={{ isShowing, setOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}
