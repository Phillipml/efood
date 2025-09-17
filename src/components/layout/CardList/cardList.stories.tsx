import type { Meta, StoryObj } from '@storybook/react-vite'
import { buttonColorsVariants, colorsVariants } from '@utils/storybook-controls'
import CardList from '.'
export default {
  title: 'layout/Card List',
  component: CardList,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    buttonTxt: {
      control: 'text',
      description: 'Texto para o botão dos cards'
    },
    $buttonSize: {
      control: 'number',
      description: 'Qual a porcentagem que o botão irá ocupar dentro do card'
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
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $lgButtonPercent: 24,
    $mdButtonPercent: 28,
    buttonTxt: 'Saiba Mais'
  }
}
export const Mobile: Story = {
  args: {
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $lgButtonPercent: 24,
    $mdButtonPercent: 28,
    buttonTxt: 'Saiba Mais'
  },
  globals: {
    viewport: { value: 'mobile2', isRotated: false }
  }
}
