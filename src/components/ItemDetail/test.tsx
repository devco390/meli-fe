import { render, screen } from 'utils/test-utils'

import ItemDetail from '.'

describe('<ItemDetail />', () => {
  it('should render the heading', () => {
    const { container } = render(<ItemDetail />)

    expect(
      screen.getByRole('heading', { name: /ItemDetail/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
