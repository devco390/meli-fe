import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #ffffff;
    display: grid;
    gap: 20px;
    grid-template-areas:
      'image image image image image image . pricebox pricebox pricebox'
      'image image image image image image . pricebox pricebox pricebox'
      'image image image image image image . pricebox pricebox pricebox'
      'image image image image image image . . . .'
      'image image image image image image . . . .'
      'image image image image image image . . . .'
      '. . . . . . . . . .'
      'description description description description description description description description description description'
      'description description description description description description description description description description';
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(9, auto);
    max-width: ${theme.size.desktop};
    width: 100%;
    @media screen and ${theme.breakPoint.mobile} {
      grid-template-areas:
        'image'
        'pricebox'
        'description';
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }
  `}
`

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    grid-area: image;
    padding: 32px;
    @media screen and ${theme.breakPoint.mobile} {
      display: flex;
      justify-content: center;
    }

    > div {
      height: 100%;
      width: 100%;
      @media screen and ${theme.breakPoint.mobile} {
        height: 180px;
        width: 180px;
      }
      > div {
        height: 100%;
        width: 100%;
        > div {
          height: 100%;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }

    img {
      object-fit: fill;
    }
  `}
`
export const WrapperPricebox = styled.div`
  ${({ theme }) => css`
    grid-area: pricebox;
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
    grid-area: description;
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
