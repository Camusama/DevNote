import { createFileRoute } from '@tanstack/react-router'
import ClickAway from '@/pages/practice/ahooks/dom/useClickAway'
export const Route = createFileRoute('/practice/ahooks/dom')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>ClickAway</h1>
        <ClickAway />
      </div>
    </div>
  )
}
