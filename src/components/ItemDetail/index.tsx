import NumberFormat from 'react-number-format'

import Image from 'components/Image'

import { IItem } from 'models/Item'
import * as S from './styles'

type ItemDetailProps = {
  item: IItem
}

const ItemDetail = ({ item }: ItemDetailProps) => {
  const { condition, sold_quantity, picture, title, price, description } = item

  return (
    <S.Wrapper>
      <S.WrapperImage>
        <Image width={'100%'} height={'100%'} src={picture} alt="Item Image" />
      </S.WrapperImage>
      <S.WrapperPricebox>
        <S.Pricebox>
          <S.PriceboxState>
            <span>
              {condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity}{' '}
              Vendidos
            </span>
          </S.PriceboxState>
          <S.PriceboxTitle>{title}</S.PriceboxTitle>
          <S.PriceboxPrice>
            <NumberFormat
              value={price ? price.amount : 0}
              displayType="text"
              thousandSeparator={true}
              prefix={'$ '}
            />
          </S.PriceboxPrice>
          <S.PriceboxBuy>
            <button type="button" disabled={true}>
              Comprar
            </button>
          </S.PriceboxBuy>
        </S.Pricebox>
      </S.WrapperPricebox>
      <S.Description>
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </S.Description>
    </S.Wrapper>
  )
}

export default ItemDetail
