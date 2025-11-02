import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks/advanced')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/practice/ahooks/advanced"!</div>
}
