import type { Meta, StoryObj } from '@storybook/react'
import Hero from './index'

const meta: Meta<typeof Hero> = {
  title: 'UI/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  parameters: {
    reactRouter: {
      routePath: '/restaurant/:id',
      routeParams: { id: '1' }
    }
  }
}
