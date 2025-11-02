import { useBoolean } from 'ahooks'
import { message } from 'antd'
import React, { useEffect } from 'react'

// 实现 useMount：组件挂载时执行回调，支持返回卸载卸载清理函数
function useMount(effect: () => void | (() => void)) {
  // 依赖为空数组，确保只在挂载时执行一次
  useEffect(effect, [])
}

function useUnmount(fn: () => void) {
  // 依赖为空数组，确保副作用只在挂载时绑定一次
  // 返回的清理函数会在组件卸载时执行
  useEffect(() => {
    return fn
  }, [])
}
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
