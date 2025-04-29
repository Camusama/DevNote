import { getAuth } from '@clerk/tanstack-react-start/server'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getWebRequest } from '@tanstack/react-start/server'
const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const { userId } = await getAuth(getWebRequest()!)

  return {
    userId,
  }
})
export const Route = createFileRoute('/_authed')({
  beforeLoad: async () => {
    const { userId } = await fetchClerkAuth()
    if (!userId) {
      return redirect({
        to: '/sign-in/$',
      })
    }
    return {
      userId,
    }
  },
})
