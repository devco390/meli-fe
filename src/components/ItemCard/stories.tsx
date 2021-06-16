import { Story, Meta } from '@storybook/react/types-6-0'
import ItemCard, { ItemCardProps } from '.'
import { itemMock } from './mock'

export default {
  title: 'ItemCard',
  component: ItemCard
} as Meta

const Template = (args: ItemCardProps) => (
  <div
    style={{
      width: '100%',
      height: '180px',
      overflow: 'hidden'
    }}
  >
    <ItemCard {...args}></ItemCard>
  </div>
)

export const Default: Story<ItemCardProps> = Template.bind({})
Default.args = {
  item: itemMock
}
