import { Story, Meta } from '@storybook/react/types-6-0'
import ItemCard from '.'

export default {
  title: 'ItemCard',
  component: ItemCard
} as Meta

const Template = (args: any) => <ItemCard {...args}></ItemCard>

export const Default: Story<any> = Template.bind({})
Default.args = {}
