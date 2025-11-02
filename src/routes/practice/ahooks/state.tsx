import { createFileRoute } from '@tanstack/react-router'
import DebouncedState from '@/pages/practice/ahooks/state/useDebouncedState'
import PreviousState from '@/pages/practice/ahooks/state/usePrevious'
export const Route = createFileRoute('/practice/ahooks/state')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>useDebouncedState</h1>
        <DebouncedState />
      </div>
      <div>
        <h1>usePreviousState</h1>
        <PreviousState />
      </div>
    </div>
  )
}
