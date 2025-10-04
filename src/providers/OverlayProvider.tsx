import { useState, type ReactNode } from 'react'
import { OverlayContext } from '../contexts/overlay-context'

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [currentOverlay, setCurrentOverlay] = useState<'modal' | 'sideMenu' | null>(null)
  
  const showModal = () => setCurrentOverlay('modal')
  const showSideMenu = () => setCurrentOverlay('sideMenu')
  const hideOverlay = () => setCurrentOverlay(null)
  
  return (
    <OverlayContext.Provider value={{ 
      currentOverlay, 
      showModal, 
      showSideMenu, 
      hideOverlay 
    }}>
      {children}
    </OverlayContext.Provider>
  )
}
