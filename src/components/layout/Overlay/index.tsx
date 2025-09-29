import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { OverlayWrapper } from './styles'

export type OverlayType = {
  children: React.ReactNode
  $justifyContent: 'center' | 'end'
  $isOpen: boolean
  onClose: () => void
}

function Overlay({ children, $justifyContent, $isOpen, onClose }: OverlayType) {
  const rootDocument = document.getElementById('root')
  useEffect(() => {
    if ($isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [$isOpen])

  return $isOpen
    ? ReactDOM.createPortal(
        <OverlayWrapper
          data-testid="modal"
          onClick={() => onClose()}
          $justifyContent={$justifyContent}
          $isOpen={$isOpen}
          onClose={onClose}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </OverlayWrapper>,
        rootDocument as Element
      )
    : null
}

export default Overlay
