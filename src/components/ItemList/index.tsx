import { IItem } from 'models/Item'
import * as S from './styles'

import ItemCard from 'components/ItemCard'
import Loader from 'components/Loader'

type ItemListProps = {
  items: IItem[]
  loading: boolean
}

const ItemList = ({ items, loading }: ItemListProps) => (
  <S.Wrapper>
    {loading ? (
      <Loader loading={loading} />
    ) : (
      items.map((item: IItem) => {
        return (
          <S.WrapperCard key={item.id}>
            <ItemCard item={item} />
          </S.WrapperCard>
        )
      })
    )}
  </S.Wrapper>
)

export default ItemList
