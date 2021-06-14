export interface IItemList {
  author: IAuthor
  categories: string[]
  items: IItem[]
}

export interface IItemListApi {
  results: IItemApi[]
  available_filters: IAvailableFilters[]
}

export interface IAvailableFilters {
  id: string
  values: IAvailableFilterValue[]
}

export interface IAvailableFilterValue {
  id: string
  name: string
  results: number
}

export interface IItemApi {
  id: string
  title: string
  currency_id: string
  price: number
  pictures?: IPicture[]
  thumbnail: string
  condition: string
  shipping: {
    free_shipping: boolean
  }
  address?: {
    state_name: string
  }
  sold_quantity: number
}

export interface IPicture {
  secure_url: string
}

export interface IItem {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
  location: string
  sold_quantity: number
}

export interface IAuthor {
  name: string
  lastname: string
}
