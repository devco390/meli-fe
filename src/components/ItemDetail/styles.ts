import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #ffffff;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
    max-width: ${theme.breakPoints.desktop};
    width: 100%;
  `}
`

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 20px;
    grid-column: 1/8;
    grid-template-rows: repeat(6, 4rem);
    padding: 32px;
    > div {
      grid-row: 1/7;
      > div {
        height: 100%;
        width: 100%;
      }
    }

    img {
      object-fit: fill;
    }
  `}
`
export const WrapperPricebox = styled.div`
  ${({ theme }) => css`
    grid-column: 10/13;
  `}
`
export const Pricebox = styled.div`
  ${({ theme }) => css`
    padding: 32px;
  `}
`
export const PriceboxState = styled.div`
  ${({ theme }) => css`
    ${theme.typography.medium}
    padding-bottom: 16px;
  `}
`
export const PriceboxTitle = styled.div`
  ${({ theme }) => css`
    ${theme.typography.headline4}
    padding-bottom: 32px;
  `}
`
export const PriceboxPrice = styled.div`
  ${({ theme }) => css`
    ${theme.typography.headline4}
    padding-bottom: 32px;
  `}
`
export const PriceboxBuy = styled.div`
  ${({ theme }) => css`
    button {
      background-color: ${theme.colors.primaryBlue};
      color: #ffffff;
      border-radius: 4px;
      border: none;
      outline: none;
      width: 100%;
      padding: 8px;
      border-style: none;
      cursor: pointer;
      &:hover,
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  `}
`
export const Description = styled.div`
  ${({ theme }) => css`
    grid-column: 1/13;
    padding: 0 32px 32px 32px;
    h3 {
      ${theme.typography.headline4}
      color: ${theme.colors.textDark};
      font-weight: 500;
      padding-bottom: 32px;
    }
    p {
      ${theme.typography.medium}
      color: ${theme.colors.text};
    }
  `}
`
