import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #ffffff;
    cursor: pointer;
    display: grid;
    gap: 0px 20px;
    grid-template-areas: 'image image data data data data data . location location';
    grid-template-columns: repeat(10, 1fr);
    position: relative;
    @media screen and ${theme.breakPoint.mobile} {
      grid-template-areas:
        'image data data data'
        'location location location location';
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto auto;
    }
    &:after {
      border-bottom: 1px solid ${theme.colors.background};
      bottom: 0;
      content: '';
      display: flex;
      left: 16px;
      position: absolute;
      right: 16px;
    }
  `}
`

export const IconShipping = styled.div`
  display: inline-block;
  margin-left: 16px;
`
export const WrapperImage = styled.div`
  ${({ theme }) => css`
    border-radius: 4px;
    display: grid;
    grid-area: image;
    height: 180px;
    padding: 16px;
    width: 180px;
    @media screen and ${theme.breakPoint.mobile} {
      height: 140px;
      width: 140px;
    }
  `}
`
export const ItemData = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
    display: flex;
    flex-direction: column;
    grid-area: data;
    padding: 32px 16px 0 0;
    p {
      ${theme.typography.large}
    }
  `}
`

export const ItemPrice = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-bottom: 32px;
    h3 {
      ${theme.typography.headline4}
    }
    > div {
      align-items: center;
      display: flex;
      justify-content: center;
      padding-left: 1rem;
    }
  `}
`
export const ItemLocation = styled.div`
  ${({ theme }) => css`
    ${theme.typography.extraSmallBold}
    color: ${theme.colors.text};
    grid-area: location;
    padding-top: 24px;
    @media screen and ${theme.breakPoint.mobile} {
      align-items: center;
      display: flex;
      justify-content: center;
      padding-bottom: 1rem;
    }
  `}
`
