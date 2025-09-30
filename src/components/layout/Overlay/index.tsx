import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { OverlayWrapper } from './styles'
import { useOverlay } from '@/hooks/useOverlay'

export type OverlayType = {
  children: React.ReactNode
  $justifyContent: 'center' | 'end'
}

function Overlay({ children, $justifyContent }: OverlayType) {
  const rootDocument = document.getElementById('root')
  const [isShowing, setOverlay] = useOverlay()

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
          data-testid="modal"
          onClick={() => setOverlay()}
          $justifyContent={$justifyContent}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </OverlayWrapper>,
        rootDocument as Element
      )
    : null
}

export default Overlay
