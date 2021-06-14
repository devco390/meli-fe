import { Story, Meta } from '@storybook/react/types-6-0'
import Breadcrumb from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as Meta

const Template = (args: any) => <Breadcrumb {...args}></Breadcrumb>

export const Default: Story<any> = Template.bind({})
Default.args = {}
