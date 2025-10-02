import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Overlay from './index'
import Modal from '../../ui/Modal'
import type { Menu } from '@/types'

const meta: Meta<typeof Overlay> = {
  title: 'Layout/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Overlay>

const mockItem: Menu = {
  id: 1,
  nome: 'Item de Exemplo',
  descricao: 'Descrição do item',
  porcao: '1 porção',
  preco: 15.90,
  foto: 'https://via.placeholder.com/300x200'
}

const OverlayWithState = (args: any) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Overlay</button>
      {isOpen && (
        <Overlay {...args}>
          <Modal 
            item={mockItem} 
            onAddToCart={() => setIsOpen(false)} 
          />
        </Overlay>
      )}
    </>
  )
}

export const Default: Story = {
  render: (args) => <OverlayWithState {...args} />,
  args: {
    $justifyContent: 'center'
  }
}

export const JustifyEnd: Story = {
  render: (args) => <OverlayWithState {...args} />,
  args: {
    $justifyContent: 'end'
  }
}
