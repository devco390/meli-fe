import { NextApiRequest, NextApiResponse } from 'next'
import ItemsService from 'services/items-api'

const getItem = async (request: NextApiRequest, response: NextApiResponse) => {
  const itemService = new ItemsService()

  const { id } = request.query
  console.log('id::: ', id)
  const items = await itemService.getItem(id as string)
  response.status(200).send(items)
}

export default getItem
