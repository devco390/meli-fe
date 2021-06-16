import { render, screen } from 'utils/test-utils'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the heading', () => {
    const { container } = render(<Loader />)

    expect(screen.getByRole('heading', { name: /Loader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
