import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from '.'

export default {
  title: 'layout/Header',
  component: Header
} as Meta

type Story = StoryObj<typeof Header>
export const Default: Story = {}
