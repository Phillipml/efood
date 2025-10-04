import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { OverlayWrapper } from './styles'
import { useOverlay } from '@/hooks/useOverlay'

export type OverlayType = {
  children: React.ReactNode
  $justifyContent: 'center' | 'end'
  type: 'modal' | 'sideMenu'
}

function Overlay({ children, $justifyContent, type }: OverlayType) {
  const rootDocument = document.getElementById('root')
  const { currentOverlay, hideOverlay } = useOverlay()
  const isShowing = currentOverlay === type

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isShowing])

  return isShowing
    ? ReactDOM.createPortal(
        <OverlayWrapper
          onClick={() => hideOverlay()}
          $justifyContent={$justifyContent}
          type={type}
          data-testid={type}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </OverlayWrapper>,
        rootDocument as Element
      )
    : null
}

export default Overlay
