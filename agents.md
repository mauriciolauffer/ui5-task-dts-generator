# Agent Instructions

This project uses the following tools and conventions:

- **Language**: [TypeScript](https://www.typescriptlang.org/) is used for development. Source files are in `src/`, compiled to `lib/`.
- **Formatter**: [oxfmt](https://oxc.rs/docs/guide/usage/formatter) is used as the project formatter. Do not use Prettier.
- **Package Manager**: [pnpm](https://pnpm.io/) is used for managing dependencies.

## Formatting

To format the code, run:

```bash
pnpm run fmt
```

To check formatting, run:

```bash
pnpm run fmt:check
```

## Testing

Tests are written using [Vitest](https://vitest.dev/). To run tests, use:

```bash
pnpm test
```

## Build

To compile TypeScript to JavaScript, run:

```bash
pnpm run build
```
