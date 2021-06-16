import styled, { css } from 'styled-components'

export const NoData = styled.span`
  ${({ theme }) => css`
    ${theme.typography.smallBold}
    padding-top: 1rem;
  `}
`
