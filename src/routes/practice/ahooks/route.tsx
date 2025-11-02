import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks')({
  component: RouteComponent,
})
const RouteMap = [
  {
    path: 'advanced',
  },
  {
    path: 'dom',
  },
  {
    path: 'effect',
  },
  {
    path: 'lifecycle',
  },
  {
    path: 'scene',
  },
  {
    path: 'state',
  },
  {
    path: 'hoc+err+request',
  },
]
function RouteComponent() {
  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {[...RouteMap].map(route => {
          return (
            <li key={route.path} className="whitespace-nowrap">
              <Link
                to={`/practice/ahooks/${route.path}`}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: 'text-black font-bold' }}
              >
                <div>{route.path}</div>
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
