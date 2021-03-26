import React, { FunctionComponent } from 'react'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const FormGroup: FunctionComponent = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
        width: 100%;
        margin-bottom: 10px;
      `}
    >
      {children}
    </div>
  )
}

export default FormGroup
