import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  fontSizes,
  buttonColorsVariants,
  PercentSizes
} from '@/utils/storybook-controls'
import Button from '.'

export default {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Altera texto do botão'
    },
    ...buttonColorsVariants,
    ...fontSizes,
    ...PercentSizes,
    onClick: {
      action: 'clicked'
    }
  }
} as Meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
