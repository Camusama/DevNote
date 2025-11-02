import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks/lifecycle')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/practice/ahooks/lifecycle"!</div>
}
