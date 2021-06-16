import NumberFormat from 'react-number-format'
import { IItem } from 'models/Item'
import * as S from './styles'
import Image from 'components/Image'
import Link from 'next/link'

export type ItemCardProps = {
  item: IItem
}

const ItemCard = ({ item }: ItemCardProps) => (
  <Link href={`/items/${item.id}`}>
    <S.Wrapper>
      <S.WrapperImage>
        <Image width={180} height={180} src={item.picture} alt="Item Image" />
      </S.WrapperImage>
      <S.ItemData>
        <S.ItemPrice>
          <h3>
            <NumberFormat
              value={item.price.amount}
              displayType="text"
              thousandSeparator={true}
              prefix={'$ '}
            />
          </h3>
          {item.free_shipping ? (
            <Image
              width={16}
              height={16}
              src={'/img/ic_shipping2x.png'}
              alt="Item Image"
            />
          ) : (
            ''
          )}
        </S.ItemPrice>

        <p>{item.title}</p>
      </S.ItemData>

      <S.ItemLocation>
        <span>{item.location}</span>
      </S.ItemLocation>
    </S.Wrapper>
  </Link>
)

export default ItemCard
