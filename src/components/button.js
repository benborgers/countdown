import React from 'react'
import { css } from '@emotion/core'

export default props => (
  <p
    css={css`
      color: var(--brand);
      font-weight: 500;
      cursor: pointer;
      transition: .2s;

      :active {
        opacity: .7;
      }
    `}
    onClick={props.onClick}
  >
    {props.text}
  </p>
)