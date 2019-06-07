import React from 'react'
import { css } from '@emotion/core'

import Name from './name'

export default ({ data, today, endDate }) => {
  const numberOfDaysLeft = Math.round((endDate - today) / (24 * 60 * 60 * 1000)).toLocaleString();

  return (
    <div>
      <div>
        <p
          css={css`
            font-size: 96px;
            font-weight: 900;
            line-height: 1;
          `}
        >
          {numberOfDaysLeft}
        </p>
        <p
          css={css`
            font-weight: 800;
            color: var(--gray);
            font-size: 18px;
            letter-spacing: .2px;
            margin-left: 8px;
          `}
        >
          {numberOfDaysLeft === 1 ? `day` : `days`} left.
        </p>
      </div>
      <Name text={data.name} />
    </div>
  )
}