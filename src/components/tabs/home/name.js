import React from 'react'
import { css } from '@emotion/core'

export default props => (
  <h2
    css={css`
      font-size: 24px;
      font-weight: 500;
      line-height: 1.3;
      margin-top: 24px;
    `}
  >
    {props.text}
  </h2>
)