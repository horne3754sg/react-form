import React, { FunctionComponent } from 'react'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

// Import available fields
import useForm from './useForm'
import FormGroup from './FormGroup'
import Input from './Input'
import TextArea from './Textarea'
import Button from './Button'

export { useForm, FormGroup, Input, TextArea, Button }

interface IProps {
  testId: string
  onSubmit: React.FormEventHandler
}

const Form: FunctionComponent<IProps> = ({ testId, onSubmit, children }) => {
  return (
    <form
      data-testid={testId}
      onSubmit={onSubmit}
      css={css`
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      {children}
    </form>
  )
}

export default Form
