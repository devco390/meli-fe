import { IItem } from 'models/Item'
import * as S from './styles'

type ItemListProps = {
  items: IItem[]
}

const ItemList = ({ items }: ItemListProps) => (
  <S.Wrapper>
    <h1>{JSON.stringify(items)}</h1>
  </S.Wrapper>
)

export default ItemList
