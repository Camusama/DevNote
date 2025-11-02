// import { useClickAway } from 'ahooks'
import React, { useEffect, useState } from 'react'

// 实现 useClickAway：点击目标元素外部时触发回调
function useClickAway(callback: () => void, target: () => HTMLElement | null | undefined) {
  useEffect(() => {
    // 点击事件处理函数
    const handleClick = (event: MouseEvent) => {
      // 获取目标元素（通过传入的函数动态获取）
      const targetElement = target()
      if (!targetElement) return // 目标元素不存在时不处理

      // 判断点击位置是否在目标元素外部 , target.contains(event.target) 最为巧妙
      const isClickOutside = !targetElement.contains(event.target as Node)
      if (isClickOutside) {
        callback() // 点击外部，触发回调
      }
    }

    // 监听全局点击事件
    document.addEventListener('click', handleClick)

    // 清理函数：移除事件监听
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [callback, target]) // 依赖变化时重新绑定事件
}
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
