import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Atom/Index/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <div>primary button</div>,
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: <div>secondary button</div>,
  color: 'secondary',
}
