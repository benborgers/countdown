import React from 'react'
import { css } from '@emotion/core'

export default props => (
  <h2
    css={css`
      font-size: 18px;
      font-weight: 600;
      color: var(--gray);
      margin-bottom: 8px;
      margin-top: 16px;

      ${props.marginTop === 'false' ? `margin-top: 0;` : ``}
    `}
  >
    {props.text}
  </h2>
)