import React, { useState } from 'react'
import Mock from 'mockjs'
import { Space, Button } from 'antd'
import { useRequest } from 'ahooks'

function getUsername(id: number): Promise<string> {
  console.log('getUsername id:', id)

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
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
