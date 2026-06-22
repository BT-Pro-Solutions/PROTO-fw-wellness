import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const pagesBase =
  process.env.GITHUB_PAGES === 'true' && repoName ? `/${repoName}/` : '/'

export default defineConfig({
  plugins: [vue()],
  base: pagesBase,
})
