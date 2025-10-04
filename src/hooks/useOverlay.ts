import { useContext } from 'react'
import { OverlayContext } from '../contexts/overlay-context'

export const useOverlay = () => {
  const context = useContext(OverlayContext)
  if (!context) {
    throw new Error('useOverlay deve ser usado dentro de um OverlayProvider')
  }
  return {
    currentOverlay: context.currentOverlay,
    showModal: context.showModal,
    showSideMenu: context.showSideMenu,
    hideOverlay: context.hideOverlay,
    isModalOpen: context.currentOverlay === 'modal',
    isSideMenuOpen: context.currentOverlay === 'sideMenu'
  }
}
