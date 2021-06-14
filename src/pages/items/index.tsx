import Base from 'templates/Base'
import ItemList from 'components/ItemList'
import Breadcrumb from 'components/Breadcrumb'
import { GetServerSidePropsContext } from 'next'

import ContentAPI from 'services/content-api'
import { IItem } from 'models/Item'

type ItemsProps = {
  categories: string[]
  items: IItem[]
}

const Items = ({ items, categories }: ItemsProps) => {
  return (
    <Base>
      <Breadcrumb />
      <ItemList items={items} />
    </Base>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query: params, res } = context

  try {
    const result = await ContentAPI.contentAPI.get(`/items`, {
      params: {
        q: params.search
      }
    })

    if (result.data) {
      const { items, categories } = result.data

      return {
        props: { items, categories }
      }
    }

    return {
      props: { items: [], categories: [] }
    }
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    return {
      props: {}
    }
  }
}

export default Items
