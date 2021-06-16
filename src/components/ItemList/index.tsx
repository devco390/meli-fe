import { IItem } from 'models/Item'
import * as S from './styles'

import ItemCard from 'components/ItemCard'
import Loader from 'components/Loader'

export type ItemListProps = {
  items: IItem[]
  loading: boolean
}

const ItemList = ({ items, loading }: ItemListProps) => {
  return loading ? (
    <Loader loading={loading} />
  ) : (
    <S.Wrapper role={'wrapperItemList'}>
      {items.map((item: IItem) => {
        return (
          <S.WrapperCard key={item.id}>
            <ItemCard item={item} />
          </S.WrapperCard>
        )
      })}
    </S.Wrapper>
  )
}

export default ItemList
