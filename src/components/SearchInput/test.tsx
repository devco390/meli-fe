import { fireEvent, render, screen } from 'utils/test-utils'

import SearchInput from '.'

describe('<SearchInput />', () => {
  it('should render the heading', () => {
    const mockSubmit = jest.fn()
    const searchText = 'gato'
    render(<SearchInput search="" handleSubmit={mockSubmit} />)

    fireEvent.change(screen.getByRole('searchInput'), {
      target: { value: searchText }
    })
    fireEvent.submit(screen.getByRole('searchForm'))

    expect(mockSubmit).toHaveBeenCalled()
    expect(mockSubmit.mock.calls).toEqual([[searchText]])
  })
})
