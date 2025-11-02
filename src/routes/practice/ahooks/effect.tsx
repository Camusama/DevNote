import { createFileRoute } from '@tanstack/react-router'
import ThrolletFn from '@/pages/practice/ahooks/effect/useThrottleFn'
export const Route = createFileRoute('/practice/ahooks/effect')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>ThrolletFn</h1>
        <ThrolletFn />
      </div>
    </div>
  )
}
