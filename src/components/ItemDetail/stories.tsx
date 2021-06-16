import { Story, Meta } from '@storybook/react/types-6-0'
import ItemDetail, { ItemDetailProps } from '.'
import { itemDetailMock } from './mock'

export default {
  title: 'ItemDetail',
  component: ItemDetail
} as Meta

const Template = (args: ItemDetailProps) => <ItemDetail {...args}></ItemDetail>

export const Default: Story<ItemDetailProps> = Template.bind({})
Default.args = {
  item: itemDetailMock,
  loading: false
}
