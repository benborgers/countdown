import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { css, Global } from '@emotion/core'

import Emoji from '../components/emoji'
import Button from '../components/button'

import Edit from '../components/edit'

export default () => {
  const [editOpen, setEditOpen] = useState(false);

  const handleEditClick = () => setEditOpen(!editOpen);

  return (
    <div>
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
          }

          :root {
            --brand: hsl(357, 73%, 45%);
          }
        `}
      />

      <div
        css={css`
          padding: 16px;
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr auto;
          grid-row-gap: 24px;
        `}
      >

        <h1
          css={css`
            font-weight: 700;
            font-size: 20px;
            grid-row: 1;
            grid-column: 1;
          `}
        >
          <Emoji emoji="🎯" />
          Countdown
        </h1>

        <div
          css={css`
            grid-row: 1;
            grid-column: 2;
            align-self: center;
          `}
        >
          <Button
            text={!editOpen ? "Edit" : "Done"}
            onClick={handleEditClick}
          />
        </div>
        
        <div
          css={css`
            grid-row: 2;
            grid-column: 1 / span 2;
          `}
        >
          {editOpen ? <Edit /> : <div>placeholder home screen</div>}
        </div>

      </div>
    </div>
  )
}