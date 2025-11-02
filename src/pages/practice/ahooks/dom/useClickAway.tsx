import { useClickAway } from 'ahooks'
import React, { useState } from 'react'

export default () => {
  const [counter, setCounter] = useState(0)

  useClickAway(
    () => {
      setCounter(s => s + 1)
    },
    () => document.getElementById('use-click-away-button')
  )

  return (
    <div>
      <button type="button" id="use-click-away-button">
        box
      </button>
      <p>counter: {counter}</p>
    </div>
  )
}
