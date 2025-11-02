import { createFileRoute } from '@tanstack/react-router'
import Mount from '@/pages/practice/ahooks/lifecycle/useMount'
export const Route = createFileRoute('/practice/ahooks/lifecycle')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>useMount</h1>
        <Mount />
      </div>
    </div>
  )
}
