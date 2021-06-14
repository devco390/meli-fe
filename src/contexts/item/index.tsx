import { useContext, createContext, useReducer } from 'react'

import { IItem } from 'models/Item'

export interface IInitialContent {
  results: {
    categories: string[]
  }
  item?: IItem
  search: string
  isLoading: boolean
}

export type ProviderProps = {
  children: React.ReactNode
}

export type DispatchType = {
  type: string
  payload: any
}

export interface ContextData {
  state: IInitialContent
  dispatch: (event: DispatchType) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_RESULTS':
      return { ...state, results: action.payload, isLoading: true, item: null }
    case 'SET_RESULTS_ITEM':
      return { ...state, item: action.payload, isLoading: true }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_SEARCH':
      return { ...state, search: action.payload }
    default:
      throw new Error()
  }
}

export const initialState: IInitialContent = {
  results: {
    categories: []
  },
  item: undefined,
  search: '',
  isLoading: false
}

const ItemContextDefaultValues = {
  state: initialState,
  dispatch: () => null
}

const ItemContext = createContext<ContextData>(ItemContextDefaultValues)

const ItemProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <ItemContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}

const useItem = () => useContext(ItemContext)

export { ItemProvider, useItem }
