import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks/effect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/practice/ahooks/effect"!</div>
}
