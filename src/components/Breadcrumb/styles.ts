import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    flex-wrap: wrap;
    max-width: ${theme.breakPoints.desktop};
    padding: 1rem 0;
    width: 100%;
  `}
`

export const Separator = styled.span`
  ${({ theme }) => css`
    ${theme.typography.small}
    color: ${theme.colors.text};
    margin: 0 0.5rem;
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    ${theme.typography.small}
    color: ${theme.colors.text};
  `}
`
