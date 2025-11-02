import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback: (reset: () => void) => ReactNode // 错误时显示的备用 UI，接收重置函数
}

interface State {
  hasError: boolean
  error?: Error
}

// 补全此类，实现 Error Boundary 功能
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // 初始化状态
    this.state = {
      // 初始化状态...
      hasError: false,
    }
  }

  // 实现捕获错误的生命周期方法
  static getDerivedStateFromError(error: Error): State {
    // 更新状态，使下一次渲染显示备用 UI
    return { hasError: true, error }
  }

  // 实现错误日志记录的生命周期方法
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 记录错误日志（如发送到服务端）
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  // 实现重置错误状态的方法
  resetError = (): void => {
    // 重置状态为无错误
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    // 根据状态渲染子组件或备用 UI
    if (this.state.hasError) {
      // 渲染备用 UI，包含重置按钮
      return this.props.fallback(this.resetError)
    }
    // 正常渲染子组件
    return this.props.children
  }
}

// 用于测试的组件：点击按钮会抛出错误
const BuggyComponent = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = () => {
    setCount(prev => {
      // 当计数达到 3 时抛出错误
      if (prev + 1 === 3) {
        throw new Error('故意抛出的错误：计数达到 3 了！')
      }
      return prev + 1
    })
  }

  return (
    <div style={{ margin: 20 }}>
      <p>当前计数：{count}</p>
      <button onClick={handleClick}>点击增加计数</button>
    </div>
  )
}

// 应用入口
export default function ErrorBoundaryDemo() {
  return (
    <div>
      <h2>Error Boundary 测试</h2>
      <ErrorBoundary
        fallback={reset => (
          <div style={{ color: 'red', border: '1px solid red', padding: 10 }}>
            <p>❌ 捕获到错误！</p>
            <p>错误信息：{reset?.error?.message}</p>{' '}
            {/* 注意这里的 reset 其实是错误边界实例的引用 */}
            <button onClick={reset}>点击重置</button>
          </div>
        )}
      >
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  )
}
