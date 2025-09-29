import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Overlay from './index'
import Modal from '../../ui/Modal'

const meta: Meta<typeof Overlay> = {
  title: 'Layout/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Overlay>

const OverlayWithState = (args: any) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Overlay</button>
      <Overlay {...args} $isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal>
          <div>
            <h2>Modal no Overlay</h2>
            <p>Conteúdo do modal</p>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
          </div>
        </Modal>
      </Overlay>
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
