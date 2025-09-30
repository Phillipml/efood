import { ModalContent } from './styles'
import { CloseButton } from './styles'
import { useOverlay } from '@/hooks/useOverlay'
import Text from '../Text'

type ModalType = {
  children: React.ReactNode
}

function Modal({ children }: ModalType) {
  const [, setOverlay] = useOverlay()
  return (
    <ModalContent>  
      <CloseButton onClick={setOverlay}>
      <Text $alignCenter={true} $textColor="secondary">X</Text>
      </CloseButton>
      {children}
    </ModalContent>
  )
}

export default Modal
