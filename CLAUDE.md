# Project Overview

This is a lightweight frontend scaffold/boilerplate project intended for personal local development. It provides a quick
starting point for creating new pages and configuring routes, without the overhead of a massive enterprise framework.

The project is built with a modern frontend stack:

- **Core:** Vue 3, TypeScript, Vite
- **UI Framework:** Ant Design Vue (globally registered)
- **Data Visualization:** Apache ECharts (import directly where needed: `import * as echarts from 'echarts'`)
- **HTTP Client:** Axios, wrapped as a shared instance in `src/utils/request.ts` (baseURL from env, error toast
  interceptor). Use `request<T>()` or the default-exported instance; do not call the global `axios` directly.

It is structured to support an Admin-style layout featuring a sidebar menu generated from the route configuration.

# Building and Running

The project uses `npm` as the package manager and `vite` for fast local development. The required packages have already
been installed.

- **Start Development Server:**
  ```bash
  npm run dev
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Preview Production Build:**
  ```bash
  npm run preview
  ```

# Development Conventions

- **Code Quality:** After completing any code changes, you MUST ensure the project compiles successfully without any
  TypeScript or Vue errors. Run the appropriate build or type-checking command (e.g., `npm run build`), and if errors
  occur, you must fix them.

## Architectural & Structural Choices

- **Routing:** Manual route configuration; the sidebar menu is generated from routes automatically.
  - **How to add a new page:**
    1. **Create the Component:** Create your page component in `src/views/<PageName>/index.vue`.
    2. **Register Route:** Add the route object to the `layoutRoutes` array in `src/router/routes.ts` (above the
       `NotFound` catch-all). Ensure it has a unique `name`, `path`, and `meta` with `title` and `icon` (the icon
       component itself, imported from `@ant-design/icons-vue`). The sidebar menu is generated from this array in
       order; do not edit `src/layout/BasicLayout.vue` for menu items. Use `meta.hideInMenu: true` for pages that
       should not appear in the menu. `meta.title` is also used as the browser tab title.
- **Navigation:** Admin-style Sidebar Menu.
- **Global Imports:** Only Ant Design Vue is registered globally in `src/main.ts`.
- **API & Env:** API prefix is `VITE_API_BASE_URL` (`.env.development` / `.env.production`). In development, requests
  under that prefix are proxied to `VITE_PROXY_TARGET` (see `vite.config.ts`). App title is `VITE_APP_TITLE` in `.env`.

## UI/UX & Design Guidelines

- **Overall Style:** Modern, professional, restrained, and enterprise-level (referencing the Ant Design official site).
- **Layout:** Use expanded layouts. Avoid narrow centered layouts and excessive whitespace on the sides. Focus on high
  information density and horizontal space utilization while maintaining clear hierarchy and readability.
- **Component Sizing:** Prefer smaller component sizes (e.g., `small` size variants) rather than the default medium
  sizes. However, ensure spacing remains orderly to avoid a cramped or "cheap" appearance.
- **Color Palette:** Light backgrounds, low-saturation neutral colors, with minimal blue used for emphasis.
- **Visual Restraint:** Strictly avoid heavy decorations, exaggerated animations, marketing-style designs, or flashy
  visual elements. Keep it clean and functional.

# Other

- New pages and route/menu configurations are added for each new requirement.

- Since this is for personal use, each side menu is almost entirely independent and does not interfere with others.