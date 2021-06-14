import { useRouter } from 'next/router'

import Image from 'components/Image'
import SearchInput from 'components/SearchInput'

import * as S from './styles'

interface ILogoData {
  href: string
  alt: string
}

const Header = () => {
  const search = ''
  const logoData: ILogoData = {
    href: '/img/logo_ml2x.png',
    alt: 'Meli Logo'
  }
  const router = useRouter()

  const handleSubmit = (value: string) => {
    if (!value) return
    router.push(`/items?search=${value}`)
  }

  return (
    <S.Wrapper>
      <S.WrapperImage>
        <Image
          width={68}
          height={35}
          alt={logoData.alt}
          quality={25}
          src={logoData.href}
          showError={false}
        />
      </S.WrapperImage>
      <S.WrapperInput>
        <SearchInput handleSubmit={handleSubmit} search={search} />
      </S.WrapperInput>
    </S.Wrapper>
  )
}

export default Header
