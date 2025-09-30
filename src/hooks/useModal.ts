import { createContext, useContext, useState, type ReactNode } from 'react'

type OverlayContextType = {
  isOpen: boolean
  showOverlay: () => void
}
const overlayContext = createContext<OverlayContextType | undefined>(undefined)
export const overlayProvider = ({children}:{children:ReactNode})=>{
    const [isOpen, setIsOpen] = useState(false)
    const showOverlay = () => setIsOpen((prev) => !prev)
    return(<OverlayContext.Provider value={{isOpen,setIsOpen}}>{children}<OverlayContext.Provider)
}
export const useOverlay = () => {
  
  
  if (!context) {
    alert('context is missing')
  }
  
  return [isOpen, showOverlay]
}
