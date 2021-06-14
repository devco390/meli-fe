import { render, screen } from 'utils/test-utils'

import Image from '.'

const imageUrl =
  'https://corp-package-creator-image.k8s-ti-cvc.com.br/images/download/9cde4b36-f7ce-491b-9d6e-26172a74aba1.jpg'

describe('<Image />', () => {
  it('should render the image', async () => {
    render(<Image src={imageUrl} width={192} height={182} quality={25} />)

    const image = screen.getByTestId('next-image')

    expect(await image).toBeInTheDocument()
  })
})
