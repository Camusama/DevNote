// import { useThrottle } from 'ahooks'
import React, { useEffect, useRef, useState } from 'react'

interface ThrottleOptions {
  wait?: number // 节流间隔（毫秒），默认1000ms
}

function useThrottle<T>(value: T, options: ThrottleOptions = {}): T {
  const { wait = 1000 } = options
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const lastValueRef = useRef<T>(value) // 存储冷却期内的最新值

  useEffect(() => {
    // 记录当前最新值（无论是否在冷却期）
    lastValueRef.current = value

    if (!timerRef.current) {
      // 不在冷却期：立即更新，并设置冷却定时器
      setThrottledValue(value)
      timerRef.current = setTimeout(() => {
        // 冷却期结束：如果期间有新值，更新一次
        if (lastValueRef.current !== throttledValue) {
          setThrottledValue(lastValueRef.current)
        }
        timerRef.current = null
      }, wait)
    }

    // 清理函数：组件卸载或依赖变化时清除定时器
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [value, wait, throttledValue])

  return throttledValue
}
export default () => {
  const [value, setValue] = useState<string>()
  const throttledValue = useThrottle(value, { wait: 500 })

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
    </div>
  )
}
