import * as S from './styles'

export type LoaderProps = {
  loading: boolean
}
const Loader = ({ loading }: LoaderProps) => (
  <>
    {loading && (
      <S.Wrapper data-testid={'loader-wrapper'}>
        <S.WrapperLoader>
          {[...Array(8).keys()].map((_, index: number) => (
            <span key={index} className={`circle circle-${index + 1}`}></span>
          ))}
        </S.WrapperLoader>
      </S.Wrapper>
    )}
  </>
)

export default Loader
