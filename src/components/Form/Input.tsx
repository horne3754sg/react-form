import React, { FunctionComponent } from 'react'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { formField, checkBoxField } from './styles'

interface IProps {
  type?: string
  value: string
  name: string
  label?: string
  placeholder?: string
  onChange: React.ChangeEventHandler
}

const Input: FunctionComponent<IProps> = (props) => {
  const { type, value, name, label, placeholder, onChange } = props

  return (
    <div
      css={css`
        width: 100%;
        ${type === 'checkbox' &&
        css`
          display: flex;
          align-items: center;
          flex-direction: row;
        `}
      `}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type || 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        css={css`
          ${type === 'checkbox' ? checkBoxField : formField}
        `}
      />
    </div>
  )
}

export default Input
