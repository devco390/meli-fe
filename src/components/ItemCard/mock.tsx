import { IItem } from 'models/Item'

export const itemMock: IItem = {
  id: 'MLA880580035',
  title: 'La Inteligencia Emocional - Daniel Goleman',
  price: {
    currency: 'ARS',
    amount: 799,
    decimals: 2
  },
  picture: 'https://http2.mlstatic.com/D_975550-MLA43695622425_102020-I.jpg',
  condition: 'new',
  free_shipping: false,
  location: 'Buenos Aires',
  sold_quantity: 250,
  category_id: 'MLA412445'
}
