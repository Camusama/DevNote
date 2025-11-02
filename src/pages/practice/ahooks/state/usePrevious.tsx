// import { usePrevious } from 'ahooks'
import React, { useEffect, useRef, useState } from 'react'

// 实现 usePrevious：获取变量上一次的值
function usePrevious<T>(value: T): T | undefined {
  // 用 ref 存储上一次的值
  const prevRef = useRef<T>(undefined)

  // 监听 value 变化，更新 ref（当前值会成为下一次的“上一次值”）
  useEffect(() => {
    prevRef.current = value
  }, [value]) // 只有 value 变化时才更新

  // 返回上一次的值
  return prevRef.current
}
export default () => {
  const [count, setCount] = useState(0)
  const previous = usePrevious(count)
  return (
    <>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: 8 }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount(c => c + 1)}>
        increase
      </button>
      <button type="button" style={{ marginLeft: 8 }} onClick={() => setCount(c => c - 1)}>
        decrease
      </button>
    </>
  )
}
