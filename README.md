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
├── layout/BasicLayout.vue   # Admin layout with sidebar menu
├── router/index.ts          # Route configuration
├── views/                   # Page components
│   ├── Home/index.vue
│   └── Settings/index.vue
├── components/              # Shared components
├── assets/                  # Static assets
├── App.vue
├── main.ts                  # Global setup (Ant Design, ECharts, Axios)
└── style.css
```

## Adding a New Page

1. Create `src/views/<PageName>/index.vue`
2. Add a route entry in `src/router/index.ts` (under `BasicLayout`'s `children`), with `meta: { title, icon }`
3. Add a matching `<a-menu-item>` in `src/layout/BasicLayout.vue` (the `key` must match the route's `name`)
