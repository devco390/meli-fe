import { render, screen } from 'utils/test-utils'

import Breadcrumb from '.'

describe('<Breadcrumb />', () => {
  it('should render the heading', () => {
    const { container } = render(<Breadcrumb />)

    expect(
      screen.getByRole('heading', { name: /Breadcrumb/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
