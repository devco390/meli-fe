import { Story, Meta } from '@storybook/react/types-6-0'
import ItemList from '.'

export default {
  title: 'ItemList',
  component: ItemList
} as Meta

const Template = (args: any) => <ItemList {...args}></ItemList>

export const Default: Story<any> = Template.bind({})
Default.args = {}
