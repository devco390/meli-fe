import { useRouter } from 'next/router'
import Link from 'next/link'

import Image from 'components/Image'
import SearchInput from 'components/SearchInput'

import * as S from './styles'

interface ILogoData {
  href: string
  alt: string
}

const Header = () => {
  const router = useRouter()
  const search = router.query.search ? (router.query.search as string) : ''
  const logoData: ILogoData = {
    href: '/img/logo_ml2x.png',
    alt: 'Meli Logo'
  }

  const handleSubmit = (value: string) => {
    if (!value) return
    router.push(`/items?search=${value}`)
  }

  return (
    <S.Wrapper>
      <Link href={'/'}>
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
      </Link>
      <S.WrapperInput>
        <SearchInput handleSubmit={handleSubmit} search={search} />
      </S.WrapperInput>
    </S.Wrapper>
  )
}

export default Header
