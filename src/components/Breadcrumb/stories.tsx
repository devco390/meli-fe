import { Story, Meta } from '@storybook/react/types-6-0'
import Breadcrumb, { breadCrumbProps } from '.'
import { categories } from './mock'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as Meta

const Template = (args: breadCrumbProps) => <Breadcrumb {...args}></Breadcrumb>

export const Default: Story<breadCrumbProps> = Template.bind({})
Default.args = { categories }
