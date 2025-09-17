import type { Meta, StoryObj } from '@storybook/react-vite'
import { textColorsVariants, fontSizes } from '@/utils/storybook-controls'
import { FaPalette } from 'react-icons/fa6'
import Text from '.'

export default {
  title: 'ui/Text-Title',
  component: Text,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Texto a ser exibido no botão',
      defaultValue: 'Clique Aqui'
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'title'],
      description: 'Permite alternar entre text simples e texto para títulos'
    },
    ...textColorsVariants,
    ...fontSizes
  }
} as Meta
type Story = StoryObj<typeof Text>
export const Default: Story = {
  args: {
    children: 'Text',
    as: 'p',
    $alignCenter: false,
    $textColor: 'tertiary'
  }
}
export const Title: Story = {
  args: {
    children: 'Title',
    as: 'title',
    $alignCenter: true,
    $textColor: 'tertiary',
    $lgFontSize: 'xl'
  }
}

export const WithIconAndText: Story = {
  args: {
    children: (
      <>
        <FaPalette /> ícone com texto
      </>
    ),
    $lgFontSize: 'xl'
  }
}
export const WithIconOnly: Story = {
  args: {
    children: (
      <>
        <FaPalette />
      </>
    ),
    $lgFontSize: 'xl'
  }
}
