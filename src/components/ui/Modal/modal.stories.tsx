import type { Meta, StoryObj } from '@storybook/react'
import Modal from './index'
import type { Menu } from '@/types'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Modal>

const mockItem: Menu = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Pizza tradicional com molho de tomate, mussarela e manjericão fresco',
  porcao: '8 fatias',
  preco: 45.90,
  foto: 'https://via.placeholder.com/300x200'
}

export const Default: Story = {
  args: {
    item: mockItem,
    onAddToCart: () => console.log('Adicionado ao carrinho')
  }
}

export const WithDifferentItem: Story = {
  args: {
    item: {
      id: 2,
      nome: 'Hambúrguer Artesanal',
      descricao: 'Hambúrguer com carne artesanal, queijo cheddar, alface, tomate e molho especial',
      porcao: '1 unidade',
      preco: 32.50,
      foto: 'https://via.placeholder.com/300x200'
    },
    onAddToCart: () => console.log('Adicionado ao carrinho')
  }
}

export const WithExpensiveItem: Story = {
  args: {
    item: {
      id: 3,
      nome: 'Picanha Premium',
      descricao: 'Picanha premium grelhada, acompanhada de arroz, feijão e farofa',
      porcao: '1 prato',
      preco: 89.90,
      foto: 'https://via.placeholder.com/300x200'
    },
    onAddToCart: () => console.log('Adicionado ao carrinho')
  }
}
