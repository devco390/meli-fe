import Header from 'components/Header'

import * as S from './styles'

export type BaseTemplateProps = {
  children?: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <Header />
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Base
