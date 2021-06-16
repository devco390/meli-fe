import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  color: #ffffff;
  background: rgb(204 204 204 / 0.8);
  justify-items: center;
  align-items: center;
  transition: opacity 2s;
  opacity: 1;
`

export const WrapperLoader = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .circle {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: ${theme.colors.primaryYellow};
      border-radius: 50%;
      animation: loading 1.5s cubic-bezier(0.8, 0.5, 0.2, 1.4) infinite;
      transform-origin: bottom center;
      position: relative;
      margin-left: 4px;
      &.circle-1 {
        animation-delay: 0.1s;
      }
      &.circle-2 {
        animation-delay: 0.2s;
      }
      &.circle-3 {
        animation-delay: 0.3s;
      }
      &.circle-4 {
        animation-delay: 0.4s;
      }
      &.circle-5 {
        animation-delay: 0.5s;
      }
      &.circle-6 {
        animation-delay: 0.6s;
      }
      &.circle-7 {
        animation-delay: 0.7s;
      }
      &.circle-8 {
        animation-delay: 0.8s;
      }
    }

    @keyframes loading {
      0% {
        transform: translateY(0px);
        background-color: ${theme.colors.primaryYellow};
      }
      50% {
        transform: translateY(50px);
        background-color: darken(${theme.colors.primaryYellow}, 20%);
      }
      100% {
        transform: translateY(0px);
        background-color: ${theme.colors.primaryYellow};
      }
    }
  `}
`
