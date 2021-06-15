import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: grid;
    gap: 0px 20px;
    grid-template-columns: repeat(12, 1fr);
    height: 100%;
    max-width: ${theme.breakPoints.desktop};
    width: 100%;
  `}
`

export const WrapperImage = styled.div`
  cursor: pointer;
  grid-column: 1 / 2;
  height: 35px;
  width: 68px;
`

export const WrapperInput = styled.div`
  grid-column: 2 / 13;
`
