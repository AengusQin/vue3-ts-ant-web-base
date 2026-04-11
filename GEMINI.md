# Project Overview

This is a lightweight frontend scaffold/boilerplate project intended for personal local development. It provides a quick starting point for creating new pages and configuring routes, without the overhead of a massive enterprise framework. 

The project is built with a modern frontend stack:
- **Core:** Vue 3, TypeScript, Vite
- **UI Framework:** Ant Design Vue (globally registered)
- **Data Visualization:** Apache ECharts (provided globally via `app.provide` and `globalProperties`)
- **HTTP Client:** Axios (provided globally via `app.provide` and `globalProperties`)

It is structured to support an Admin-style layout featuring a sidebar menu and manual route configuration.

# Building and Running

The project uses `npm` as the package manager and `vite` for fast local development. The required packages have already been installed.

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

## Architectural & Structural Choices
- **Routing:** Manual route configuration. New pages should be added to a central routing file rather than relying on auto-generated file-based routing.
- **Navigation:** Admin-style Sidebar Menu.
- **Global Imports:** Ant Design Vue, ECharts, and Axios are already configured and imported globally in `src/main.ts`.

## UI/UX & Design Guidelines
- **Overall Style:** Modern, professional, restrained, and enterprise-level (referencing the Ant Design official site).
- **Layout:** Use expanded layouts. Avoid narrow centered layouts and excessive whitespace on the sides. Focus on high information density and horizontal space utilization while maintaining clear hierarchy and readability.
- **Component Sizing:** Prefer smaller component sizes (e.g., `small` size variants) rather than the default medium sizes. However, ensure spacing remains orderly to avoid a cramped or "cheap" appearance.
- **Color Palette:** Light backgrounds, low-saturation neutral colors, with minimal blue used for emphasis.
- **Visual Restraint:** Strictly avoid heavy decorations, exaggerated animations, marketing-style designs, or flashy visual elements. Keep it clean and functional.