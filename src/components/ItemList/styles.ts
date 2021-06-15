import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: repeat(12, 1fr);
    max-width: ${theme.breakPoints.desktop};
    width: 100%;
  `}
`
export const WrapperCard = styled.div`
  grid-column: 1/ 13;
`
