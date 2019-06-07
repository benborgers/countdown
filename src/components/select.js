import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

export default props => {
  const [lastClicked, setLastClicked] = useState('');

  const handleClick = e => {
    setLastClicked(e.target.innerHTML);
    props.onChange(e.target.innerHTML);
  }

  useEffect(() => {
    setLastClicked(props.selected);
  }, [])

  return (
    <div>
      {props.options.map(option => 
        <div
          css={css`
            display: inline-block;
            font-weight: 500;
            border: 1px solid var(--brand);
            border-radius: 4px;
            padding: 6px 10px;
            margin-right: 12px;
            cursor: pointer;
            transition: .1s;
            ${lastClicked === option ? `background-color: var(--brand); color: white;` : ``}
          `}
          onClick = {handleClick}
          key={option}
        >
          {option}
        </div>
      )}
    </div>
  )
}