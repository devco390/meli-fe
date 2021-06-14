import { Story, Meta } from '@storybook/react/types-6-0'
import ItemDetail from '.'

export default {
  title: 'ItemDetail',
  component: ItemDetail
} as Meta

const Template = (args: any) => <ItemDetail {...args}></ItemDetail>

export const Default: Story<any> = Template.bind({})
Default.args = {}
