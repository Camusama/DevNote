import { createFileRoute } from '@tanstack/react-router'
import RouteComponent from '@/pages/monitors/nezha'
export const Route = createFileRoute('/_authed/monitors/nezha')({
  component: RouteComponent,
})
