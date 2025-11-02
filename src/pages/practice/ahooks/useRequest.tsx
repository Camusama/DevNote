import React, { useCallback, useEffect, useRef, useState } from 'react'
import Mock from 'mockjs'
import { Space, Button } from 'antd'
// import { useRequest } from 'ahooks'

function getUsername(id: number): Promise<string> {
  console.log('getUsername id:', id)

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

// 请求选项类型
interface UseRequestOptions<TParams = any> {
  refreshDeps?: any[] // 依赖变化时自动刷新
}

// 请求结果类型
interface UseRequestResult<TData = any, TParams = any> {
  data: TData | undefined
  loading: boolean
  run: (params: TParams) => Promise<void> // 手动执行请求
}

// 实现核心useRequest逻辑
function useRequest<TData = any, TParams = any>(
  service: (params: TParams) => Promise<TData>,
  options: UseRequestOptions<TParams> = {}
): UseRequestResult<TData, TParams> {
  const { refreshDeps = [] } = options

  const [data, setData] = useState<TData>()
  const [loading, setLoading] = useState(false)
  const latestParams = useRef<TParams | null>(null) // 存储最新参数

  // 核心请求执行函数
  const execute = useCallback(
    async (params: TParams) => {
      if (loading) return // 加载中忽略重复请求

      setLoading(true)
      latestParams.current = params

      try {
        const result = await service(params)
        // 确保返回的是最新一次请求的结果（避免竞态问题）
        if (latestParams.current === params) {
          setData(result)
        }
      } catch (error) {
        console.error('Request failed:', error)
      } finally {
        if (latestParams.current === params) {
          setLoading(false)
        }
      }
    },
    [service, loading]
  )

  // 手动触发方法
  const run = useCallback(
    (params: TParams) => {
      return execute(params)
    },
    [execute]
  )

  // 依赖变化时自动刷新
  useEffect(() => {
    // 如果有初始依赖，自动执行一次（这里简化处理：依赖变化就执行，使用最新参数）
    if (latestParams.current !== null) {
      run(latestParams.current)
    }
  }, [...refreshDeps]) // 监听依赖变化

  return { data, loading, run }
}

export default () => {
  const [userId, setUserId] = useState<number>()
  const { data, loading, run } = useRequest((id: number) => getUsername(id), {
    refreshDeps: [userId],
  })

  return (
    <Space direction="vertical">
      <p>Username: {loading ? 'loading...' : data}</p>
      <Button onClick={() => setUserId(Math.random())}>Use dependency id to refresh</Button>
      <Button onClick={() => run(Math.random())}>Use run function to refresh</Button>
    </Space>
  )
}
