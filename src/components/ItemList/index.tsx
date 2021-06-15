import { IItem } from 'models/Item'
import * as S from './styles'

import ItemCard from 'components/ItemCard'

type ItemListProps = {
  items: IItem[]
}

const ItemList = ({ items }: ItemListProps) => (
  <S.Wrapper>
    {items.map((item: IItem) => {
      return (
        <S.WrapperCard key={item.id}>
          <ItemCard item={item} />
        </S.WrapperCard>
      )
    })}
  </S.Wrapper>
)

export default ItemList
