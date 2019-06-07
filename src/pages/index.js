import React from 'react'
import { Helmet } from 'react-helmet'
import { css, Global } from '@emotion/core'

import App from '../components/app'

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Countdown</title>
    </Helmet>

    <Global
      styles={css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, Roboto, system-ui, sans-serif;
          color: black;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
          padding: 0;
          outline: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          appearance: none;
        }

        :root {
          --brand: hsl(357, 73%, 45%);

          --gray: hsl(357, 8%, 55%);
        }
      `}
    />

    <App />
  </React.Fragment>
)