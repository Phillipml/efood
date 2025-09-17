import type { Meta, StoryObj } from '@storybook/react-vite'
import { RestaurantHeader } from '.'

export default {
  title: 'layout/Restaurant Header',
  component: RestaurantHeader
} as Meta

type Story = StoryObj<typeof RestaurantHeader>
export const Default: Story = {}
export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false }
  }
}
