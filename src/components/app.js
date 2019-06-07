import React, { useState } from 'react'
import { css } from '@emotion/core'

import usePersistentState from '../hooks/usePersistentState'

import Logo from './logo'
import Button from './button'

import Home from './tabs/home/index.js'
import Edit from './tabs/edit'

export default () => {
  const [editOpen, setEditOpen] = useState(false);

  const handleEditClick = () => setEditOpen(!editOpen);

  const today = new Date();
  const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))
  const weekFromToday = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));

  const formatDate = date => date.getFullYear() + 
    '-' + 
    (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + 
    '-' + 
    (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());

  const [data, setData] = usePersistentState({
    name: `Example Countdown`,
    type: `Percent Completed`,
    startDate: formatDate(yesterday),
    endDate: formatDate(weekFromToday)
  });

  return (
    <div
      css={css`
        position: fixed;
        width: 100vw;
      `}
    >

      <div
        css={css`
          padding: 16px;
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr auto;
          grid-row-gap: 24px;
        `}
      >

        <Logo />

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
          {editOpen ? <Edit data={data} setData={setData}/> : <Home data={data}/>}
        </div>

      </div>

    </div>
  )
}