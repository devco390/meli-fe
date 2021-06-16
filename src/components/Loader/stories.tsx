import { Story, Meta } from '@storybook/react/types-6-0'
import Loader from '.'

export default {
  title: 'Loader',
  component: Loader
} as Meta

const Template = (args: any) => <Loader {...args}></Loader>

export const Default: Story<any> = Template.bind({})
Default.args = {}
