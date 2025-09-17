import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  colorsVariants,
  buttonColorsVariants,
  textColorsVariants,
  ButtonPercentSizes
} from '@/utils/storybook-controls'
import Card from '.'

export default {
  title: 'ui/Card',
  component: Card,
  layout: 'centered',
  argTypes: {
    image: {
      control: false,
      description: 'Imagem do Card'
    },
    name: {
      control: 'text',
      description: 'Nome do card'
    },
    rating: {
      control: 'number',
      description: 'Nota estabelecimento'
    },
    description: {
      control: 'text',
      description: 'Descrição do card'
    },
    ...colorsVariants,
    ...textColorsVariants,
    ...buttonColorsVariants,
    ...ButtonPercentSizes
  }
} as Meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    image: '/src/assets/images/hioki.png',
    name: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa!',
    buttonTxt: 'Adicionar ao carrinho'
  }
}
