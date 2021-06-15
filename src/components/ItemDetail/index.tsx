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
      <div className="meli-app__item-detail__image">
        <Image width={'100%'} height={'100%'} src={picture} alt="Item Image" />
      </div>
      <div className="meli-app__item-detail__pricebox">
        <div className="meli-app__pricebox">
          <div className="meli-app__pricebox__state">
            <label>
              {condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity}{' '}
              Vendidos
            </label>
          </div>
          <div className="meli-app__pricebox__title">{title}</div>
          <div className="meli-app__pricebox__price">
            <NumberFormat
              value={price ? price.amount : 0}
              displayType="text"
              thousandSeparator={true}
              prefix={'$ '}
            />
          </div>
          <div className="meli-app__pricebox__buy">
            <button type="button" disabled={true}>
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="meli-app__item-detail__description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </S.Wrapper>
  )
}

export default ItemDetail
