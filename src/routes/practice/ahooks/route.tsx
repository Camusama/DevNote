import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ahooks')({
  component: RouteComponent,
})
const RouteMap = [
  {
    path: 'ClosureTrap',
    name: 'ClosureTrap',
  },
]
function RouteComponent() {
  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {[...RouteMap].map(route => {
          return (
            <li key={route.name} className="whitespace-nowrap">
              <Link
                //@ts-ignore
                to={`/practice/ahooks/${route.path}`}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: 'text-black font-bold' }}
              >
                <div>{route.name}</div>
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
