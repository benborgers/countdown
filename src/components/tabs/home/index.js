import React from 'react'

import DaysLeft from './daysLeft'
import PercentCompleted from './percentCompleted'

export default ({ data }) => {
  const today = new Date();
  const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);

  const endDate = (new Date(data.endDate)).getTime() + ((new Date(data.endDate)).getTimezoneOffset() * 60 * 1000);

  return (
    <React.Fragment>
      {
        data.type === `Days Left` ? 
        <DaysLeft data={data} today={todayClean} endDate={endDate} /> : 
        <PercentCompleted data={data} today={todayClean} endDate={endDate} />
      }
    </React.Fragment>
  )
}