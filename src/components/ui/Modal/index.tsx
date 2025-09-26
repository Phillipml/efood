import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper } from './styles'

export type ModalType = {
  children: React.ReactNode
  $justifyContent: 'center' | 'end'
  $isOpen: boolean
  onClose: () => void
}

function Modal({ children, $justifyContent, $isOpen, onClose }: ModalType) {
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
        <ModalWrapper
          onClick={() => onClose()}
          $justifyContent={$justifyContent}
          $isOpen={$isOpen}
          onClose={onClose}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </ModalWrapper>,
        rootDocument as Element
      )
    : null
}

export default Modal
