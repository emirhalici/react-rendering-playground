# React Rendering Playground

This repository is for experimenting with Javascript/DOM/Element manipulation. It implements an oversimplified version of React's rendering system and basic state hooks.

> Warning: This is an **_oversimplification_** of React/JSX and contains very naive implementations for internal rendering/state/hook systems. For starters, rendering is done synchronously, concurrency isn't supported. Plus, entire DOM is recalculated on each render.

## Getting Started

### Install

Clone the project

```bash
git clone https://github.com/emirhalici/react-rendering-playground.git
```

Go to project directory

```bash
cd react-rendering-playground
```

Make sure pnpm is [installed](https://pnpm.io/installation).

> `npm` probably works fine too, but pnpm is much faster and I use it in place of npm.

```bash
pnpm -v
```

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:1234>.

```bash
pnpm run dev
```

### Available Commands

```bash
pnpm run dev # Runs with hot reload
pnpm run build # Builds/bundles project statically
pnpm run clean # Cleans up project for built dist files, node packages and parcel caches
```

### Dependencies

This project has no dependencies to React or other packages. For dev environment; devtool packages are installed for linting, typescript, code formatting etc.

### License

This project is licensed under the MIT License.
