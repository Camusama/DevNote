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
    },
  },
})
