import { IItem } from 'models/Item'

export const itemListMock: IItem[] = [
  {
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
  },
  {
    id: 'MLA901954970',
    title: 'Pack 3 Remeras Cuello Redondo Algodón Hombre Daniel Hechter',
    price: {
      currency: 'ARS',
      amount: 6499,
      decimals: 2
    },
    picture: 'https://http2.mlstatic.com/D_970605-MLA46332167999_062021-O.jpg',
    condition: 'new',
    free_shipping: true,
    location: 'Buenos Aires',
    sold_quantity: 100,
    category_id: 'MLA109042'
  },
  {
    id: 'MLA645622794',
    title: 'Pensar Rapido Pensar Despacio',
    price: {
      currency: 'ARS',
      amount: 2089,
      decimals: 2
    },
    picture: 'https://http2.mlstatic.com/D_819285-MLA43309731473_082020-I.jpg',
    condition: 'new',
    free_shipping: false,
    location: 'Buenos Aires',
    sold_quantity: 100,
    category_id: 'MLA412445'
  },
  {
    id: 'MLA717354035',
    title: 'Acolchado Reversible Doble Faz 1 ½ Plaza Directo De Fabirca',
    price: {
      currency: 'ARS',
      amount: 2200,
      decimals: 2
    },
    picture: 'https://http2.mlstatic.com/D_640241-MLA40209786492_122019-O.jpg',
    condition: 'new',
    free_shipping: false,
    location: 'Capital Federal',
    sold_quantity: 500,
    category_id: 'MLA30091'
  }
]
