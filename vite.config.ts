import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const apiPrefix = env.VITE_API_BASE_URL

  return {
    plugins: [vue()],
    server: {
      // 仅当前缀是相对路径（如 /api）且配置了后端地址时启用代理
      proxy:
        apiPrefix?.startsWith('/') && env.VITE_PROXY_TARGET
          ? {
              [apiPrefix]: {
                target: env.VITE_PROXY_TARGET,
                changeOrigin: true,
                // 默认会去掉前缀再转发；如果后端接口本身带 /api 前缀，删掉这一行
                rewrite: (path) => path.replace(new RegExp(`^${apiPrefix}`), ''),
              },
            }
          : undefined,
    },
  }
})
