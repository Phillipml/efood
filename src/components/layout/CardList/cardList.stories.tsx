import type { Meta, StoryObj } from '@storybook/react-vite'
import { buttonColorsVariants, colorsVariants } from '@utils/storybook-controls'
import CardList, { type CardData } from '.'

const mockCardsData: CardData[] = [
  {
    id: '1',
    image: '/src/assets/images/hioki.png',
    name: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa!',
    isFeatured: true,
    foodType: 'Japonês'
  },
  {
    id: '2',
    image: '/src/assets/images/hioki.png',
    name: 'Pizza Palace',
    rating: 4.7,
    description: 'As melhores pizzas artesanais da cidade!',
    foodType: 'Italiano'
  },
  {
    id: '3',
    image: '/src/assets/images/hioki.png',
    name: 'Burger King',
    rating: 4.5,
    description: 'Hambúrgueres suculentos e batatas crocantes.',
    isFeatured: true
  },
  {
    id: '4',
    image: '/src/assets/images/hioki.png',
    name: 'Taco Bell',
    rating: 4.3,
    description: 'Autêntica culinária mexicana com temperos marcantes.',
    foodType: 'Mexicano'
  }
]

const restaurantCardsData: CardData[] = [
  {
    id: '1',
    image: '/src/assets/images/hioki.png',
    name: 'Sushi Salmão',
    description: 'Sushi de salmão fresco com arroz temperado e alga nori.'
  },
  {
    id: '2',
    image: '/src/assets/images/hioki.png',
    name: 'Temaki Especial',
    description: 'Temaki com camarão, salmão e pepino, envolvido em alga nori.'
  },
  {
    id: '3',
    image: '/src/assets/images/hioki.png',
    name: 'Sashimi Mix',
    description: 'Seleção de sashimis de salmão, atum e peixe branco.'
  }
]

export default {
  title: 'layout/Card List',
  component: CardList,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    cards: {
      control: false,
      description: 'Array de dados dos cards'
    },
    buttonTxt: {
      control: 'text',
      description: 'Texto para o botão dos cards'
    },
    $lgButtonPercent: {
      control: 'number',
      description: 'Porcentagem do botão em telas grandes'
    },
    $mdButtonPercent: {
      control: 'number',
      description: 'Porcentagem do botão em telas médias'
    },
    $smButtonPercent: {
      control: 'number',
      description: 'Porcentagem do botão em telas pequenas'
    },
    ...colorsVariants,
    ...buttonColorsVariants,
    onClick: {
      action: 'clicked'
    }
  }
} as Meta

type Story = StoryObj<typeof CardList>

export const Default: Story = {
  args: {
    cards: mockCardsData,
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $lgButtonPercent: 24,
    $mdButtonPercent: 28,
    buttonTxt: 'Saiba Mais'
  }
}

export const HomePage: Story = {
  args: {
    cards: mockCardsData,
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $lgButtonPercent: 24,
    $mdButtonPercent: 28,
    buttonTxt: 'Saiba Mais'
  }
}

export const RestaurantPage: Story = {
  args: {
    cards: restaurantCardsData,
    $darkTheme: 'secondary',
    $lightTheme: 'tertiary',
    $lgButtonPercent: 100,
    $mdButtonPercent: 100,
    $smButtonPercent: 100,
    buttonTxt: 'Adicionar'
  }
}

export const Mobile: Story = {
  args: {
    cards: mockCardsData,
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $lgButtonPercent: 24,
    $mdButtonPercent: 28,
    buttonTxt: 'Saiba Mais'
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}

export const Tablet: Story = {
  args: {
    cards: mockCardsData,
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $lgButtonPercent: 24,
    $mdButtonPercent: 28,
    buttonTxt: 'Saiba Mais'
  },
  parameters: {
    viewport: { defaultViewport: 'tablet' }
  }
}
