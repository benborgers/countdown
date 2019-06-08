import React from 'react'
import { css } from '@emotion/core'

import Logo from '../components/logo'

export default () => (
  <div
    css={css`
      padding: 32px;
    `}
  >
    <Logo />
    <p
      css={css`
        margin-top: 16px;
        line-height: 1.5;
        
      `}
    >
      This web app is meant to be used on a mobile device.
      <br />
      Try opening
      <span
        css={css`
          display: inline-block;
          margin: 0 4px;
          text-decoration: underline;
          text-decoration-color: var(--brand);
        `}
      >
        countdown.elk.sh
      </span>
      on your phone!
    </p>
  </div>
)