# GEMINI.md

## Project Overview

This is a web application for "Periyava's Grace by Lavanya," a service offering spiritual counseling, astrology, and blessed products. The application is built with React, Vite, TypeScript, and styled with Tailwind CSS and shadcn-ui. It features a responsive design with a navigation bar, several pages for different services, and a footer.

## Building and Running

To build and run this project, you need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server at `http://localhost:8080`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready files.

4.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for utility-first styling and shadcn-ui for pre-built components.
*   **Components:** Components are organized in the `src/components` directory. Reusable UI components are located in `src/components/ui`.
*   **Pages:** Page components are located in the `src/pages` directory.
*   **Routing:** Routing is handled by `react-router-dom`. The routes are defined in `src/App.tsx`.
*   **State Management:** The project uses `@tanstack/react-query` for data fetching and caching.
*   **Path Aliases:** The project uses the `@` alias for the `src` directory.
