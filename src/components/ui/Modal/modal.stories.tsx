import type { Meta, StoryObj } from '@storybook/react'
import Modal from './index'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: <div>Conteúdo do modal</div>
  }
}

export const WithImage: Story = {
  args: {
    children: (
      <>
        <img src="https://via.placeholder.com/300x200" alt="Imagem" />
        <div>
          <h2>Título do Modal</h2>
          <p>Descrição do conteúdo</p>
        </div>
      </>
    )
  }
}

export const WithButton: Story = {
  args: {
    children: (
      <div>
        <h2>Confirmação</h2>
        <p>Tem certeza que deseja continuar?</p>
        <button>Confirmar</button>
      </div>
    )
  }
}
