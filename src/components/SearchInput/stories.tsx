import { Story, Meta } from '@storybook/react/types-6-0'
import SearchInput, { SearchInputProps } from '.'

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta

const Template = (args: SearchInputProps) => (
  <SearchInput {...args}></SearchInput>
)

export const Default: Story<SearchInputProps> = Template.bind({})
Default.args = {
  search: '',
  handleSubmit: jest.fn
}
