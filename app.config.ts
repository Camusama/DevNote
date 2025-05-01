import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import { cloudflare } from 'unenv'

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  server: {
    preset: 'cloudflare-pages',
    unenv: cloudflare,
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    define: {
      'import.meta.env.CF_PAGES_BUILD_TIME': JSON.stringify(new Date().toISOString()),
      'import.meta.env.BUILD_BRANCH': JSON.stringify(process.env.CF_PAGES_BRANCH),
      'import.meta.env.BUILD_COMMIT_HASH': JSON.stringify(process.env.CF_PAGES_COMMIT_SHA),
    },
  },
})
