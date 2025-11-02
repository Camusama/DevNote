import { useEffect, useState } from 'react'
import { useLatest } from 'ahooks'
import { Button } from '@/components/ui/button'

export default function ClosureTrap() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count) // 始终为0
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 正例：useLatest解决
  const countRef = useLatest(count)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(countRef.current) // 最新值
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h1>Closure Trap in Console log</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}
