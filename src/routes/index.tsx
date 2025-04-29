import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getAuth } from '@clerk/tanstack-react-start/server'
import { getWebRequest } from '@tanstack/react-start/server'
import { SignOutButton, useUser } from '@clerk/tanstack-react-start'

// const authStateFn = createServerFn({ method: 'GET' }).handler(async () => {
//   const request = getWebRequest()
//   if (!request) throw new Error('No request found')
//   const { userId } = await getAuth(request)

//   if (!userId) {
//     throw redirect({
//       to: '/sign-in/$',
//     })
//   }

//   return { userId }
// })

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <h1>home page</h1>
    </>
  )
}
