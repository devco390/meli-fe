import { render, screen } from 'utils/test-utils'

import ItemCard from '.'

describe('<ItemCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<ItemCard />)

    expect(
      screen.getByRole('heading', { name: /ItemCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
