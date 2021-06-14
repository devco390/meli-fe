import { render, screen } from 'utils/test-utils'

import Skeleton from '.'

describe('<Skeleton />', () => {
  it('should render svg card if type=card', () => {
    render(<Skeleton type={'card'} />)

    expect(screen.getByRole('skeleton-card')).toBeInTheDocument()
  })

  it('should render svg card if type=sidebarDetail', () => {
    render(<Skeleton type={'sidebarDetail'} />)

    expect(screen.getByRole('skeleton-sidebarDetail')).toBeInTheDocument()
  })

  it('should render svg card if type=image', () => {
    render(<Skeleton type={'image'} />)

    expect(screen.getByRole('skeleton-image')).toBeInTheDocument()
  })
})
