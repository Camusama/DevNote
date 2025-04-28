import { SignUp } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/sign-up/$')({
  component: Page,
})

function Page() {
  return (
    <div className="flex justify-center mt-5">
      <SignUp />
    </div>
  )
}
