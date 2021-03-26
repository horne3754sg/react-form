import React, { FunctionComponent } from 'react'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { button, buttonLoading } from './styles'

interface IProps {
  label?: string
  disabled: boolean
  onClick?: React.MouseEventHandler
}

const Button: FunctionComponent<IProps> = ({ label, disabled, onClick }) => {

  return (
    <button
      type="submit"
      onClick={onClick}
      css={css`
        ${button}
      `}
      disabled={disabled}
    >
      <span className="btn-label">{label || 'Submit'}</span>
      {disabled && (
        <span
          css={css`
            ${buttonLoading}
          `}
        >
          <span />
          <span />
          <span />
        </span>
      )}
    </button>
  )
}

export default Button
