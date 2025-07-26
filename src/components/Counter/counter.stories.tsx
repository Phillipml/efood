import type { Meta, StoryObj } from '@storybook/react'
import Counter from '.'

export default {
  title: 'Counter',
  component: Counter
} as Meta
export const Default: StoryObj<typeof Counter> = {}
