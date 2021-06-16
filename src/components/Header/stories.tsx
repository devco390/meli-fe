import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

const Template = () => <Header></Header>

export const Default: Story = Template.bind({})
