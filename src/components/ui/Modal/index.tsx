import { ModalContent } from './styles'

type ModalType = {
  children: React.ReactNode
}

function Modal({ children }: ModalType) {
  return (
    <ModalContent>
      {children}
    </ModalContent>
  )
}

export default Modal
