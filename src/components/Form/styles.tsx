import { css, keyframes } from '@emotion/react'

export const formField = css`
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  padding: 10px 20px;
  font-size: 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
`

export const checkBoxField = css`
  order: -1;
`

export const button = css`
  position: relative;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: dodgerblue;

  &:hover {
    cursor: pointer;
    background-color: darkblue;
  }

  &:disabled {
    cursor: not-allowed;

    .btn-label {
      opacity: 0;
    }
  }
`

export const buttonLoading = css`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);

  span {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  span:nth-of-type(1) {
    left: 0;
    animation: dot1 0.6s infinite;
  }

  span:nth-of-type(2) {
    left: 0;
    animation: dot2 0.6s infinite;
  }

  span:nth-of-type(3) {
    left: 26px;
    animation: dot2 0.6s infinite;
  }

  span:nth-of-type(4) {
    left: 48px;
    animation: dot3 0.6s infinite;
  }

  @keyframes dot1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes dot3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes dot2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
