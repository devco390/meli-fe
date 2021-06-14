import { Story, Meta } from '@storybook/react/types-6-0'
import SearchInput from '.'

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta

const Template = (args: any) => <SearchInput {...args}></SearchInput>

export const Default: Story<any> = Template.bind({})
Default.args = {}
