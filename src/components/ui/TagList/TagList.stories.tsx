import type { Meta, StoryObj } from '@storybook/react-vite'
import TagList from '.'

export default {
  title: 'ui/TagList',
  component: TagList,
  layout: 'centered',
  argTypes: {
    isFeatured: {
      control: 'boolean',
      description: 'Se o card é destaque'
    },
    foodType: {
      control: 'text',
      description: 'Tipo de comida'
    }
  }
} as Meta

type Story = StoryObj<typeof TagList>

export const Default: Story = {
  args: {
    isFeatured: false,
    foodType: undefined
  }
}

export const WithFeatured: Story = {
  args: {
    isFeatured: true,
    foodType: undefined
  }
}

export const WithFoodType: Story = {
  args: {
    isFeatured: false,
    foodType: 'Japonês'
  }
}

export const WithBoth: Story = {
  args: {
    isFeatured: true,
    foodType: 'Italiano'
  }
}

export const WithDifferentFoodTypes: Story = {
  args: {
    isFeatured: true,
    foodType: 'Mexicano'
  }
}
