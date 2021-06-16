import { render, screen } from 'utils/test-utils'

import Breadcrumb, { maxCategoryToShow } from '.'
import { categories } from './mock'

describe('<Breadcrumb />', () => {
  it('It must show the first 5 categories', () => {
    render(<Breadcrumb categories={categories} />)
    categories
      .filter((category: string, index: number) => {
        return category.length > 0 && index < maxCategoryToShow
      })
      .map((category: string) => {
        expect(screen.getByText(category)).toBeInTheDocument()
      })
  })
})
