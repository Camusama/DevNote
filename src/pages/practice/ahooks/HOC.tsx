import { Button } from 'antd'
import React, { useState, useEffect, ComponentType } from 'react'

// 补全此高阶组件
function withLoading<P extends { isLoading: boolean }>(
  WrappedComponent: ComponentType<P>,
  options?: { delay?: number } // 延迟显示加载状态的毫秒数，默认0
) {
  const { delay = 0 } = options || {}

  return (props: P) => {
    const [showLoading, setShowLoading] = useState(false)

    // 处理延迟显示加载状态
    useEffect(() => {
      let timer: NodeJS.Timeout

      if (props.isLoading) {
        // 当处于加载状态时，延迟后显示加载
        timer = setTimeout(() => {
          setShowLoading(true)
        }, delay)
      } else {
        // 加载结束，立即隐藏加载
        setShowLoading(false)
      }

      // 清理定时器，避免内存泄漏
      return () => clearTimeout(timer)
    }, [props.isLoading, delay])

    // 加载状态且超过延迟时间：显示加载提示
    if (props.isLoading && showLoading) {
      return <div style={{ color: '#666' }}>加载中...</div>
    }

    // 非加载状态或未超过延迟：渲染原组件并传递props
    return <WrappedComponent {...props} />
  }
}

// 测试用的目标组件：展示用户信息
const UserComponent = ({
  name,
  age,
  isLoading,
}: {
  name: string
  age: number
  isLoading: boolean
}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16 }}>
      <h3>用户信息</h3>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
    </div>
  )
}

// 使用 HOC 包装目标组件，配置延迟1000ms显示加载
const UserWithLoading = withLoading(UserComponent, { delay: 1000 })

// 应用入口：模拟加载状态切换
export default function HOCDemo() {
  const [isLoading, setIsLoading] = useState(true)

  // 模拟API请求：2秒后结束加载
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ margin: 20 }}>
      <h2>HOC 加载状态示例</h2>
      <UserWithLoading isLoading={isLoading} name="张三" age={28} />
      <Button style={{ marginTop: 16 }} onClick={() => setIsLoading(true)}>
        重新加载
      </Button>
    </div>
  )
}
