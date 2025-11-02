import { createFileRoute } from '@tanstack/react-router'
import HistoryTravle from '@/pages/practice/ahooks/scene/useHistoryTravel'

export const Route = createFileRoute('/practice/ahooks/scene')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>HistoryTravle</h1>
        <HistoryTravle />
      </div>
    </div>
  )
}
