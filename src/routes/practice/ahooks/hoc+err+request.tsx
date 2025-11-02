import { createFileRoute } from '@tanstack/react-router'
import ErrorBoundary from '@/pages/practice/ahooks/ErrorBoundary'
import RequestDemo from '@/pages/practice/ahooks/useRequest'
import HocDemo from '@/pages/practice/ahooks/HOC'

export const Route = createFileRoute('/practice/ahooks/hoc+err+request')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-30">
      <div>
        <h1>HocDemo</h1>
        <HocDemo />
      </div>
      <div>
        <h1>ErrorBoundary</h1>
        <ErrorBoundary />
      </div>
      <div>
        <h1>RequestDemo</h1>
        <RequestDemo />
      </div>
    </div>
  )
}
