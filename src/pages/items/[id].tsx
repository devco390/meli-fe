import Base from 'templates/Base'
import ItemDetail from 'components/ItemDetail'
import Breadcrumb from 'components/Breadcrumb'
import { GetServerSidePropsContext } from 'next'

import * as S from './styles'

import ContentAPI from 'services/content-api'
import { IItem } from 'models/Item'

import { PageProps } from 'pages'

type ItemsProps = {
  item: IItem
}

const ItemDetailPage = ({ item, loading }: ItemsProps & PageProps) => {
  console.log(item)
  return (
    <Base>
      {item ? (
        <>
          <Breadcrumb categories={item.categories as string[]} />
          <ItemDetail item={item} loading={loading} />
        </>
      ) : (
        <S.NoData>Ítem no disponible.</S.NoData>
      )}
    </Base>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query: params, res } = context
  const emptyProps = { items: [], categories: [] }

  try {
    const result = await ContentAPI.contentAPI.get(`/items/${params.id}`)

    if (result.data) {
      const item: IItem = result.data

      return {
        props: { item }
      }
    }

    return {
      props: emptyProps
    }
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    return {
      props: emptyProps
    }
  }
}

export default ItemDetailPage
