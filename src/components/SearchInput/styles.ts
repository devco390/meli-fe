import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    position: relative;
    input {
      background-color: #ffffff;
      border-radius: 2px;
      border: none;
      color: $color-text-dark;
      font-size: $font-size-lg;
      height: 36px;
      outline: none;
      padding: 0.5rem calc(1rem + 40px) 0.5rem 1rem;
      position: relative;
      width: 100%;
    }
    button {
      background-color: ${theme.colors.background};
      border-color: ${theme.colors.background};
      border-style: none;
      cursor: pointer;
      height: 36px;
      outline: none;
      position: absolute;
      right: 0;
      width: 40px;
      > div {
        align-items: center;
        display: flex;
        justify-content: center;
        padding-right: 0;
      }
    }
  `}
`
