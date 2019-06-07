import React from 'react'
import { css } from '@emotion/core'

import MiniHeading from '../components/miniHeading'
import Select from '../components/select'

export default props => {
  const data = props.data;
  const setData = props.setData;

  const handleTypeChange = type => setData({...data, type});

  const handleNameChange = e => setData({...data, name: e.target.value});

  const handleStartDateChange = e => setData({...data, startDate: e.target.value});
  const handleEndDateChange = e => setData({...data, endDate: e.target.value});

  return (
    <div>
      <MiniHeading text="Name" marginTop="false" />
      <input
        type="text"
        css={css`
          padding: 6px 10px;
          border: 1px solid var(--brand);
          border-radius: 4px;
          width: calc(70vw);
          user-select: text;
        `}
        onChange = {handleNameChange}
        value = {data.name}
      />

      <MiniHeading text="Countdown Type" />
      <Select
        options={["Days Left", "Percentage Left"]}
        selected={data.type}
        onChange = {handleTypeChange}
      />

      {data.type === `Percentage Left` ? 
        <div>
          <MiniHeading text="Start Date" />
          <input
            type="date"
            css={css`
              padding: 6px 10px;
              border: 1px solid var(--brand);
              border-radius: 4px;
            `}
            value={data.startDate}
            onChange = {handleStartDateChange}
          />
        </div>
      : ``}

      <MiniHeading text="End Date" />
      <input
        type="date"
        css={css`
          padding: 6px 10px;
          border: 1px solid var(--brand);
          border-radius: 4px;
        `}
        value={data.endDate}
        onChange = {handleEndDateChange}
      />
    </div>
  )
}