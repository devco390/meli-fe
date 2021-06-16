import * as S from './styles'

export type breadCrumbProps = {
  categories: string[]
}

export const maxCategoryToShow = 5

const Breadcrumb = ({ categories }: breadCrumbProps) => {
  const categoriesFiltered = categories.filter(
    (category: string, index: number) => {
      return category.length > 0 && index < maxCategoryToShow
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
