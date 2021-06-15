import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    display: grid;
    grid-template-areas: 'header' 'content';
    grid-template-rows: 52px 1fr;
    height: 100%;
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.primaryYellow};
    display: flex;
    grid-area: header;
    height: 52px;
    justify-content: center;
    padding: 0 1rem;
  `}
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: content;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 0 1rem 1.5rem 1rem;
`
