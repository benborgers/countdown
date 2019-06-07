import React from 'react'
import { css } from '@emotion/core'

/* eslint-disable */

export default props => (
  <span
    role="image"
    css={css`
      display: inline-block;
      vertical-align: 10%;
      font-size: .95em;
      margin-right: 4px;
    `}
  >
    {props.emoji}
  </span>
)