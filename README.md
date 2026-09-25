# vue3-ts-ant-web

A lightweight frontend scaffold for personal local development. Provides a quick starting point with an Admin-style layout (sidebar + content area) for creating new pages and configuring routes.

## Tech Stack

- Vue 3 + TypeScript + Vite
- Ant Design Vue 4
- Apache ECharts 6
- Axios
- Vue Router 5

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── layout/BasicLayout.vue   # Admin layout; sidebar menu is generated from routes
├── router/
│   ├── routes.ts            # Page routes (layoutRoutes) + RouteMeta typing
│   └── index.ts             # Router instance, document title
├── utils/request.ts         # Axios instance (baseURL from env, error interceptor)
├── views/                   # Page components
│   ├── Home/index.vue
│   ├── Settings/index.vue
│   └── NotFound/index.vue
├── App.vue
├── main.ts                  # Global setup (Ant Design Vue)
├── env.d.ts                 # Typing for import.meta.env
└── style.css
```

## Adding a New Page

1. Create `src/views/<PageName>/index.vue`
2. Add a route entry to `layoutRoutes` in `src/router/routes.ts` (above the `NotFound` catch-all), with
   `meta: { title, icon }` where `icon` is the component from `@ant-design/icons-vue`

The sidebar menu and browser tab title are derived from the route automatically. Use `meta.hideInMenu: true` to hide a
page from the menu.

## API & Environment

| Variable             | File               | Purpose                                         |
|----------------------|--------------------|-------------------------------------------------|
| `VITE_APP_TITLE`     | `.env`             | App name (logo, browser tab title)              |
| `VITE_API_BASE_URL`  | `.env.development` / `.env.production` | Axios baseURL and dev proxy prefix |
| `VITE_PROXY_TARGET`  | `.env.development` | Local backend address for the dev server proxy  |

In development, requests under `VITE_API_BASE_URL` (default `/api`) are proxied to `VITE_PROXY_TARGET`, with the prefix
stripped. If your backend routes already include `/api`, remove the `rewrite` line in `vite.config.ts`.

```ts
import { request } from '../../utils/request' // from src/views/<PageName>/index.vue

const list = await request<User[]>({ url: '/users', method: 'get' })
```
