import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks/dom')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/practice/ahooks/dom"!</div>
}
