import { useBoolean, useMount } from 'ahooks'
import { message } from 'antd'
import React from 'react'

const MyComponent = () => {
  useMount(() => {
    message.info('mount')

    return () => {
      message.info('unmount')
    }
  })

  return <div>Hello World</div>
}

export default () => {
  const [state, { toggle }] = useBoolean(false)

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  )
}
