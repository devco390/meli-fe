import { useState, useEffect } from 'react'

import Image from 'components/Image'

import * as S from './styles'

export type SearchInputProps = {
  search: string
  handleSubmit: (value: string) => void
}

const SearchInput = ({ handleSubmit, search }: SearchInputProps) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue(search)
  }, [search])

  const handleChangeInput = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value)
  }

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(value)
  }

  return (
    <S.Wrapper onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={handleChangeInput}
      />
      <button type="submit">
        <Image
          width={16}
          height={16}
          src="/img/ic_search2x.png"
          alt="Icon Search"
          showError={false}
        />
      </button>
    </S.Wrapper>
  )
}

export default SearchInput
