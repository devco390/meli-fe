import { NextApiRequest, NextApiResponse } from 'next'
import ItemsService from 'services/items-api'

const getItems = async (request: NextApiRequest, response: NextApiResponse) => {
  const itemService = new ItemsService()
  const { q } = request.query
  const items = await itemService.getItems(q as string)
  response.status(200).send(items)
}

export default getItems
