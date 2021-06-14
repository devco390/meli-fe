import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0px 20px;
    background: ${theme.colors.primaryYellow};
    height: 100%;
    align-items: center;
  `}
`

export const WrapperImage = styled.div`
  width: 68px;
  height: 35px;
  grid-column: 2 / 3;
`

export const WrapperInput = styled.div`
  grid-column: 3 / 12;
`
