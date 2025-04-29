import { getAuth } from '@clerk/tanstack-react-start/server'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getWebRequest } from '@tanstack/react-start/server'

const authStateFn = createServerFn({ method: 'GET' }).handler(async () => {
  const request = getWebRequest()
  if (!request) throw new Error('No request found')
  const { userId } = await getAuth(request)

  if (!userId) {
    throw redirect({
      to: '/sign-in/$',
      replace: true,
    })
  }

  return { userId }
})
export const Route = createFileRoute('/_authed')({
  beforeLoad: async () => {
    const { userId } = await authStateFn()
    return {
      userId,
    }
  },
})
