import { SignIn } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/sign-in/$')({
  component: Page,
})

function Page() {
  return (
    <div className="flex justify-center mt-25">
      <SignIn />
    </div>
  )
}
