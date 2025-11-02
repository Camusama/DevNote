import { useCallback, useEffect, useRef, useState } from 'react'

// 实现此Hook：输入值变化后，延迟delay毫秒才更新返回值
function useDebounce<T>(value: T, delay: number, immediate?: boolean): T | undefined {
  // 补全代码
  const [debouncedValue, setDebouncedValue] = useState<T>()

  const isFirst = useRef(true) // 标记是否首次更新

  useEffect(() => {
    if (immediate && isFirst.current) {
      setDebouncedValue(value)
      isFirst.current = false
    }

    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [value])
  return debouncedValue
}

// 用例
function SearchInput() {
  const [value, setValue] = useState<string>()
  const debouncedValue = useDebounce(value, 500)

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  )
}

export default SearchInput
