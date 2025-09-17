import type { Meta, StoryObj } from '@storybook/react-vite'
import { RemProps } from '@utils/storybook-controls'
import { Logo } from '.'

export default {
  title: 'ui/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'O Logo é clicável e redireciona para a página inicial'
      }
    }
  },
  ...RemProps
} as Meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    $lgRem: 36
  }
}
export const Large: Story = {
  args: {
    $lgRem: 280
  }
}
export const Small: Story = {
  args: {
    $lgRem: 16
  }
}
