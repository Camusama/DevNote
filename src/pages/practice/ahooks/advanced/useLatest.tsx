// import { useLatest } from 'ahooks'
import React, { useEffect, useRef, useState } from 'react'

// 实现 useLatest：始终返回最新的值
function useLatest<T>(value: T) {
  // 创建一个 Ref 用于存储最新值
  const ref = useRef<T>(value)

  // 当 value 变化时，更新 Ref 的 current 值
  useEffect(() => {
    ref.current = value
  }, [value])

  // 返回这个 Ref（始终指向最新值）
  return ref
}

export default () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const latestCountRef = useLatest(count)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(default): {count2}</p>
    </>
  )
}
