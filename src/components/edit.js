import React, { useState } from 'react'
// import { css } from '@emotion/core'

export default () => {
  const [data, setData] = useState({});

  return (
    <div>
      <form>
        <input type="radio" id="countdown" name="select-type" />
        <label htmlFor="countdown">Count Down Days</label>

        <input type="radio" id="percent" name="select-type" />
        <label htmlFor="percent">Percent Progress</label>
      </form>
      
    </div>
  )
}