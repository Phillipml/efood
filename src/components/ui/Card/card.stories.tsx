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
      description: 'Nota estabelecimento (opcional)'
    },
    description: {
      control: 'text',
      description: 'Descrição do card'
    },
    isFeatured: {
      control: 'boolean',
      description: 'Se o card é destaque'
    },
    foodType: {
      control: 'text',
      description: 'Tipo de comida'
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

export const WithFeaturedTag: Story = {
  args: {
    image: '/src/assets/images/hioki.png',
    name: 'Restaurante Destaque',
    rating: 4.8,
    description: 'Restaurante em destaque da semana',
    buttonTxt: 'Ver Cardápio',
    isFeatured: true
  }
}

export const WithFoodType: Story = {
  args: {
    image: '/src/assets/images/hioki.png',
    name: 'Pizza Palace',
    rating: 4.5,
    description: 'As melhores pizzas da cidade',
    buttonTxt: 'Fazer Pedido',
    foodType: 'Italiano'
  }
}

export const WithBothTags: Story = {
  args: {
    image: '/src/assets/images/hioki.png',
    name: 'Sushi Master',
    rating: 4.9,
    description: 'Sushi premium em destaque',
    buttonTxt: 'Reservar',
    isFeatured: true,
    foodType: 'Japonês'
  }
}

export const WithoutRating: Story = {
  args: {
    image: '/src/assets/images/hioki.png',
    name: 'Prato do Dia',
    description: 'Prato especial sem avaliação',
    buttonTxt: 'Adicionar'
  }
}

export const RestaurantPage: Story = {
  args: {
    image: '/src/assets/images/hioki.png',
    name: 'Sushi Salmão',
    description: 'Sushi de salmão fresco com arroz temperado',
    buttonTxt: 'Adicionar'
  }
}
