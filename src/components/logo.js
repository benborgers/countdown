import React from 'react'
import { css } from '@emotion/core'

export default () => (
  <h1
    css={css`
      font-weight: 700;
      font-size: 20px;
      grid-row: 1;
      grid-column: 1;
    `}
  >
    <span
      role="image"
      css={css`
        display: inline-block;
        vertical-align: 10%;
        font-size: .95em;
        margin-right: 4px;
      `}
    >
      🎯
    </span>
    Countdown
  </h1>
)