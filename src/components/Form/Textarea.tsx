import React, { FunctionComponent } from 'react'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { formField } from './styles'

interface IProps {
  value: string
  name: string
  label?: string
  placeholder?: string
  onChange: React.ChangeEventHandler
}

const Textarea: FunctionComponent<IProps> = (props) => {
  const { value, name, label, placeholder, onChange } = props

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        css={css`
          ${formField}
        `}
      />
    </div>
  )
}

export default Textarea
