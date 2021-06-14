import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas: 'header' 'content';
    grid-template-rows: 52px 1fr;
    height: 100%;
    background-color: ${theme.colors.background};
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`
    grid-area: header;
    height: 52px;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    height: 100%;
  `}
`
