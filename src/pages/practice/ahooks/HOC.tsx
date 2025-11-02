import { ReactNode } from '@tanstack/react-router'
import { FC, forwardRef, useImperativeHandle, useState } from 'react'

export const withLoading = (Component: ReactNode) => {
  const Wrapped = forwardRef((props, ref) => {
    const [loading, setLoading] = useState(false)
    // 透传ref给子组件
    useImperativeHandle(ref, () => ({
      setLoading, // 暴露方法
    }))
    return <Component {...props} loading={loading} />
  })
  // 修复displayName
  Wrapped.displayName = `withLoading(${Component.name})`
  return Wrapped
}
