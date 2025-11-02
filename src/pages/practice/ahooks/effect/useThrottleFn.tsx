// import { useThrottleFn } from 'ahooks'
import React, { useCallback, useRef, useState } from 'react'

function useThrottleFn<T extends (...args: any[]) => any>(fn: T, options: any = {}) {
  const { wait = 1000 } = options
  const timerRef = useRef<NodeJS.Timeout | null>(null) // 定时器标识
  const isThrottlingRef = useRef(false) // 是否处于节流冷却期

  // 节流处理后的函数
  const throttledFn = useCallback(
    (...args: Parameters<T>) => {
      if (isThrottlingRef.current) {
        // 处于冷却期，直接执行
        return
      }

      // 立即执行一次
      fn(...args)
      isThrottlingRef.current = true

      // 设置冷却期，到期后重置状态
      timerRef.current = setTimeout(() => {
        isThrottlingRef.current = false
        timerRef.current = null
      }, wait)
    },
    [fn, wait]
  )

  // 清理函数：组件卸载载时清除定时器
  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    isThrottlingRef.current = false
  }, [])

  return {
    run: throttledFn, // 节流后的执行函数
    cancel, // 手动取消节流（可选）
  }
}

export default () => {
  const [value, setValue] = useState(0)
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1)
    },
    { wait: 500 }
  )

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={run}>
        Click fast!
      </button>
    </div>
  )
}
