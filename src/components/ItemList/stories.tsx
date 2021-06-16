import { Story, Meta } from '@storybook/react/types-6-0'
import ItemList, { ItemListProps } from '.'
import { itemListMock } from './mock'

export default {
  title: 'ItemList',
  component: ItemList
} as Meta

const Template = (args: ItemListProps) => <ItemList {...args}></ItemList>

export const Default: Story<ItemListProps> = Template.bind({})
Default.args = {
  items: itemListMock,
  loading: false
}
