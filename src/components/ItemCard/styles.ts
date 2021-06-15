import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #ffffff;
    cursor: pointer;
    display: grid;
    gap: 0px 20px;
    grid-template-columns: repeat(10, 1fr);
    position: relative;
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

export const WrapperImageAndData = styled.div`
  display: grid;
  grid-column: 1 / 9;
  grid-template-columns: min-content auto;
`

export const IconShipping = styled.div`
  display: inline-block;
  margin-left: 16px;
`
export const WrapperImage = styled.div`
  border-radius: 4px;
  height: 180px;
  padding: 16px;
  width: 180px;
`
export const ItemData = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
    display: flex;
    flex-direction: column;
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
    padding-top: 24px;
  `}
`
