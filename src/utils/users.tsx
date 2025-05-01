export type User = {
  id: number
  name: string
  email: string
}

// 根据环境自动选择正确的API基础URL
export const DEPLOY_URL = import.meta.env.PAGE_URL || 'http://localhost:5000'
