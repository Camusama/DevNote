import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks/scene')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/practice/ahooks/scene"!</div>
}
