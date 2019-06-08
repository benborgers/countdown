import React, { useState, useEffect } from 'react'

import DaysLeft from './daysLeft'
import PercentCompleted from './percentCompleted'

export default ({ data }) => {
  const today = new Date();
  const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);

  const [endDate, setEndDate] = useState();

  useEffect(() => {
    setEndDate(
      (new Date(data.endDate)).getTime() + ((new Date(data.endDate)).getTimezoneOffset() * 60 * 1000)
    );
  }, [])

  const [isDaysLeftType, setIsDaysLeftType] = useState(true);

  useEffect(() => {
    if(data.type === `Percent Completed`) {
      setIsDaysLeftType(false);
    }
  }, [])

  return (
    <React.Fragment>
      {
        isDaysLeftType ? 
        <DaysLeft data={data} today={todayClean} endDate={endDate} /> : 
        <PercentCompleted data={data} today={todayClean} endDate={endDate} />
      }
    </React.Fragment>
  )
}