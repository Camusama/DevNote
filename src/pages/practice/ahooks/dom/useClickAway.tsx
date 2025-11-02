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
      <div
        className="w-50 h-50 bg-red-500 text-white flex items-center justify-center"
        id="use-click-away-button"
      >
        box
      </div>
      <p>counter: {counter}</p>
    </div>
  )
}
