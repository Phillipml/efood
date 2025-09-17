import type { Meta, StoryObj } from '@storybook/react-vite'
import { buttonColorsVariants, colorsVariants } from '@utils/storybook-controls'
import CardList from '.'
export default {
  title: 'Card List',
  component: CardList,
  tags: ['autodocs'],
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
    $buttonSize: 25,
    buttonTxt: 'Texto do botão'
  }
}
export const Mobile: Story = {
  args: {
    $darkTheme: 'secondary',
    $lightTheme: 'primary',
    $buttonSize: 25,
    buttonTxt: 'Texto do botão'
  },
  globals: {
    // 👇 Override viewport for this story
    viewport: { value: 'mobile1', isRotated: false }
  }
}
