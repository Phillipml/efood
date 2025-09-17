import type { Meta, StoryObj } from '@storybook/react-vite'
import { RemProps } from '@utils/storybook-controls'
import { Logo } from '.'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'O Logo é clicável e redireciona para a página inicial'
      }
    }
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
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
