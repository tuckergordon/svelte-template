# Svelte Template

[![CI Tests](https://github.com/tuckergordon/svelte-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/tuckergordon/svelte-template/actions/workflows/ci.yaml)

## About

A template Svelte repo set up with all the goodies you'd want for a new project, including:

- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- Formatting ([Prettier](https://prettier.io/)) and linting ([ESlint](https://eslint.org/)),
  including
  - Auto-ordering of `import` statements
  - `.md` and `.yaml` formatting/linting
- Basic CI via [GitHub Actions](https://github.com/features/actions)

## Prerequisites

[Node.js](https://nodejs.org/en/) version 16 or higher

## Installation

```zsh
npm ci
```

## Usage

To run this application, start [Vite](https://vitejs.dev/), which will build and serve the
application:

```zsh
npm run dev
```

Navigate to the given URL and you should see the app running. This is a live server with
[Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement), so whenever
you change a file in `src` and save it, you will see your changes applied immediately.

## Building and running in production mode

To create an optimized version of the application for production:

```zsh
npm run build
```

You can run the newly-built app with `npm run preview` which will serve the `dist/` folder created
by the build.
