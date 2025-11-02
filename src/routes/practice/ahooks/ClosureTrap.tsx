import { createFileRoute } from '@tanstack/react-router'
import ClosureTrap from '@/pages/practice/ahooks/basic-hooks-advanced/closureTrap'
export const Route = createFileRoute('/practice/ahooks/ClosureTrap')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ClosureTrap />
    </>
  )
}
