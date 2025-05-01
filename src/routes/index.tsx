import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <h1 className="text-4xl font-bold mb-8">Dev Console</h1>
      <div className="grid gap-3 text-sm text-muted-foreground w-full max-w-xs">
        <div className="flex justify-between">
          <span className="font-medium">Commit:</span>
          <span>{import.meta.env.BUILD_COMMIT_HASH?.slice(0, 7) || 'local'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Branch:</span>
          <span>{import.meta.env.BUILD_BRANCH || 'local'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Build Time:</span>
          <span>
            {new Date(import.meta.env.CF_PAGES_BUILD_TIME || '').toLocaleString('zh-CN', {
              timeZone: 'Asia/Shanghai',
            })}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">PAGE URL:</span>
          <span>{import.meta.env.PAGE_URL || 'local'}</span>
        </div>
      </div>
    </div>
  )
}
