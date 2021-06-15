import * as S from './styles'

type breadCrumbProps = {
  categories: string[]
}

const limitItems = 3

const Breadcrumb = ({ categories }: breadCrumbProps) => {
  const categoriesFiltered = categories.filter(
    (category: string, index: number) => {
      return category.length > 0 && index <= limitItems
    }
  )

  return (
    <S.Wrapper>
      {categoriesFiltered.map((category: string, index: number) => {
        return (
          <div key={index}>
            <S.Text>{category}</S.Text>
            {index < categoriesFiltered.length - 1 && (
              <S.Separator>&gt;</S.Separator>
            )}
          </div>
        )
      })}
    </S.Wrapper>
  )
}

export default Breadcrumb
