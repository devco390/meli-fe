import { render, screen } from 'utils/test-utils'

import Header from '.'

describe('<Header />', () => {
  it('Must render the logo and search input', () => {
    render(<Header />)

    expect(screen.getByTestId('logo-meli')).toBeInTheDocument()
    expect(screen.getByTestId('input-search')).toBeInTheDocument()
  })
})
