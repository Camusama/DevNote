import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_example/posts/')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return <div>posts.index.tsx</div>
}
