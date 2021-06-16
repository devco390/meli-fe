import NumberFormat from 'react-number-format'
import { IItem } from 'models/Item'
import * as S from './styles'
import Image from 'components/Image'
import Link from 'next/link'

export type ItemCardProps = {
  item: IItem
}

const ItemCard = ({ item }: ItemCardProps) => {
  const {
    id,
    picture,
    price: { amount },
    free_shipping,
    title,
    location
  } = item

  return (
    <Link href={`/items/${id}`}>
      <S.Wrapper role={'itemCardList'}>
        <S.WrapperImage>
          <Image width={180} height={180} src={picture} alt="Card Item Image" />
        </S.WrapperImage>
        <S.ItemData>
          <S.ItemPrice>
            <h3>
              <NumberFormat
                value={amount}
                displayType="text"
                thousandSeparator={','}
                prefix={'$ '}
              />
            </h3>
            {free_shipping ? (
              <Image
                width={16}
                height={16}
                src={'/img/ic_shipping2x.png'}
                alt="Free Shipping Image"
              />
            ) : (
              ''
            )}
          </S.ItemPrice>

          <p>{title}</p>
        </S.ItemData>

        <S.ItemLocation>
          <span>{location}</span>
        </S.ItemLocation>
      </S.Wrapper>
    </Link>
  )
}

export default ItemCard
