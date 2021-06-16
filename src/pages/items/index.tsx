import { useEffect } from 'react'

import Base from 'templates/Base'
import ItemList from 'components/ItemList'
import Breadcrumb from 'components/Breadcrumb'
import { GetServerSidePropsContext } from 'next'

import ContentAPI from 'services/content-api'
import { IItem } from 'models/Item'
import { useItem } from 'contexts/item'
import { PageProps } from 'pages'

type ItemsProps = {
  categories: string[]
  items: IItem[]
}

const Items = ({ items, categories, loading }: ItemsProps & PageProps) => {
  const { dispatch } = useItem()

  useEffect(() => {
    dispatch({
      type: 'SET_RESULTS',
      payload: { items, categories }
    })
  }, [])

  return (
    <Base>
      <Breadcrumb categories={categories} />
      <ItemList items={items} loading={loading} />
    </Base>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query: params, res } = context
  const emptyProps = { items: [], categories: [] }

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

export default Items
