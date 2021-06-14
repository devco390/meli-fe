import { render, screen } from 'utils/test-utils'

import ItemList from '.'

describe('<ItemList />', () => {
  it('should render the heading', () => {
    const { container } = render(<ItemList />)

    expect(
      screen.getByRole('heading', { name: /ItemList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
