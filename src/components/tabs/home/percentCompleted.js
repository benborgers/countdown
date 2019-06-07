import React from 'react'
import { css } from '@emotion/core'

import Name from './name'

export default ({ data, today, endDate}) => {
  const startDate = (new Date(data.startDate)).getTime() + ((new Date(data.endDate)).getTimezoneOffset() * 60 * 1000);
  const totalDistance = endDate - startDate;
  const distancePassed = today - startDate;
  const decimalPassed = distancePassed / totalDistance;

  return (
    <div>
      <p
        css={css`
          font-size: 96px;
          font-weight: 900;
          line-height: 1;
        `}
      >
        {Math.round(decimalPassed * 1000) / 10}
          <span
            css={css`
              font-size: 64px;
              font-weight: 900;
              color: var(--gray);
              display: inline-block;
              margin-left: 16px;
              opacity: .6;
            `}
          >
            %
          </span>
      </p>
      <Name text={data.name} />
    </div>
  )
}