import { createFileRoute } from '@tanstack/react-router'
import LatestState from '@/pages/practice/ahooks/advanced/useLatest'
import MemorizedFn from '@/pages/practice/ahooks/advanced/useMemoizedFn'
export const Route = createFileRoute('/practice/ahooks/advanced')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>LatestState</h1>
        <LatestState />
      </div>
      <div>
        <h1>MemorizedFn</h1>
        <MemorizedFn />
      </div>
    </div>
  )
}
