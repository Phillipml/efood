import { ModalContent } from './styles'
import { CloseButton } from './styles'
import { useOverlay } from '@/hooks/useOverlay'
import { IoCloseOutline } from 'react-icons/io5'

type ModalType = {
  children: React.ReactNode
}

function Modal({ children }: ModalType) {
  const [, setOverlay] = useOverlay()
  return (
    <ModalContent>
      <CloseButton onClick={setOverlay}>
        <IoCloseOutline />
      </CloseButton>
      {children}
    </ModalContent>
  )
}

export default Modal
