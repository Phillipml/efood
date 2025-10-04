import { ModalContent } from './styles'
import { CloseButton } from './styles'
import { useOverlay } from '@/hooks/useOverlay'
import { IoCloseOutline } from 'react-icons/io5'
import Overlay from '@/components/layout/Overlay'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { priceFormatter } from '@/utils/price-utils'
import type { Menu } from '@/types'

export type ModalType = {
  item: Menu | null
  onAddToCart: () => void
}

function Modal({ item, onAddToCart }: ModalType) {
  const { hideOverlay } = useOverlay()

  if (!item) return null

  return (
    <Overlay $justifyContent="center" type="modal">
      <ModalContent>
        <CloseButton onClick={hideOverlay}>
          <IoCloseOutline />
        </CloseButton>
        <img src={item.foto} width={50} alt={item.nome} />
        <div>
          <Text as="title" $textColor="primary" $smFontSize="lg">
            {item.nome}
          </Text>
          <Text $textColor="primary">{item.descricao}</Text>

          <Text $textColor="primary">{item.porcao}</Text>
          <Button
            onClick={onAddToCart}
            $buttonColor="secondary"
            $buttonTextColor="tertiary"
            $lgButtonPercent={34}
            $smButtonPercent={80}
          >
            Adicionar ao carrinho - {priceFormatter(item.preco)}
          </Button>
        </div>
      </ModalContent>
    </Overlay>
  )
}

export default Modal
