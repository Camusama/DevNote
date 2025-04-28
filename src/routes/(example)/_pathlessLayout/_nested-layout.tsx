import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(example)/_pathlessLayout/_nested-layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <div>_nested-layout.tsx nested layout</div>
      <div className="flex gap-2 border-b">
        <Link
          to="/route-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Go to route A
        </Link>
        <Link
          to="/route-b"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Go to route B
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
