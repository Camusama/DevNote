import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_example')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
