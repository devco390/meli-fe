import { render, screen } from 'utils/test-utils'

import ItemList from '.'
import { itemListMock } from './mock'

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

describe('<ItemList />', () => {
  it('The total of cards rendered must be equal to the total of items', () => {
    render(<ItemList items={itemListMock} loading={false} />)

    expect(screen.queryAllByRole('itemCardList')).toHaveLength(
      itemListMock.length
    )
  })

  it('If loading is true then it should not show list', () => {
    render(<ItemList items={itemListMock} loading={true} />)

    const wrapperItemList = screen.queryByRole('wrapperItemList')
    expect(wrapperItemList).not.toBeInTheDocument()

    const wrapperLoader = screen.queryByTestId('loader-wrapper')
    expect(wrapperLoader).toBeInTheDocument()
  })
})
