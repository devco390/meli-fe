import { render, screen } from 'utils/test-utils'

import ItemDetail, { getConditionText } from '.'
import { itemDetailMock } from './mock'

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

describe('<ItemDetail />', () => {
  const {
    condition,
    sold_quantity,
    picture,
    title,
    price: { amount },
    description
  } = itemDetailMock

  it('Should render the following properties: condition, sold_quantity, title, amount, description', () => {
    render(<ItemDetail item={itemDetailMock} loading={false} />)

    const formatAmount = new Intl.NumberFormat().format(amount)
    const conditionText = getConditionText(condition, sold_quantity)

    expect(screen.getByText(`$ ${formatAmount}`)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    expect(screen.getByText(conditionText)).toBeInTheDocument()
    expect(screen.getByText(description || '')).toBeInTheDocument()
  })

  it('The picture property of the item must be the src of the image', () => {
    render(<ItemDetail item={itemDetailMock} loading={false} />)

    const image = screen.getByAltText('Item Image Detail')
    expect(image).toHaveAttribute('src', picture)
  })

  it('If loading is true then it should not show the detail', () => {
    render(<ItemDetail item={itemDetailMock} loading={true} />)

    const wrapperItemDetail = screen.queryByRole('wrapperItemDetail')
    expect(wrapperItemDetail).not.toBeInTheDocument()

    const wrapperLoader = screen.queryByTestId('loader-wrapper')
    expect(wrapperLoader).toBeInTheDocument()
  })
})
