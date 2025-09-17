import type { Meta, StoryObj } from '@storybook/react-vite'
import { RemProps } from '@utils/storybook-controls'
import { Icon } from '.'
export default {
  title: 'ui/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  ...RemProps
} as Meta

type Story = StoryObj<typeof Icon>

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
