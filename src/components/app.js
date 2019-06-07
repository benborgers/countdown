import React, { useState } from 'react'
import { css } from '@emotion/core'

import usePersistentState from '../hooks/usePersistentState'

import Emoji from './emoji'
import Button from './button'

import Edit from './edit'

export default () => {
  const [editOpen, setEditOpen] = useState(false);

  const handleEditClick = () => setEditOpen(!editOpen);

  const today = new Date();
  const weekFromToday = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));

  const formatDate = date => date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate();

  const [data, setData] = usePersistentState({
    name: `Example Countdown`,
    type: `Percentage Left`,
    startDate: formatDate(today),
    endDate: formatDate(weekFromToday)
  });

  return (
    <div>

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
          {editOpen ? <Edit data={data} setData={setData}/> : <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>

      </div>

    </div>
  )
}