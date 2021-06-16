import { render, screen } from 'utils/test-utils'

import ItemCard from '.'
import { itemMock } from './mock'

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

describe('<ItemCard />', () => {
  const {
    picture,
    price: { amount },
    title,
    location
  } = itemMock

  it('Should render the following properties: amount, free_shipping, title, location', () => {
    render(<ItemCard item={itemMock} />)

    const formatAmount = new Intl.NumberFormat().format(amount)

    expect(screen.getByText(`$ ${formatAmount}`)).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(location)).toBeInTheDocument()
  })

  it('The picture property of the item must be the src of the image', () => {
    render(<ItemCard item={itemMock} />)

    const image = screen.getByAltText('Card Item Image')
    expect(image).toHaveAttribute('src', picture)
  })

  it('If free_shipping is true it should show the free shipping icon', () => {
    const itemMockWithFreeShipping = { ...itemMock, free_shipping: true }
    render(<ItemCard item={itemMockWithFreeShipping} />)

    const image = screen.getByAltText('Free Shipping Image')
    expect(image).toBeInTheDocument()
  })

  it('If free_shipping is false it should not show the free shipping icon', () => {
    const itemMockWithOutFreeShipping = { ...itemMock, free_shipping: false }
    render(<ItemCard item={itemMockWithOutFreeShipping} />)

    const imageFreeShipping = screen.queryByAltText('Free Shipping Image')
    expect(imageFreeShipping).not.toBeInTheDocument()
  })
})
