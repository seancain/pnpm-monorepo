# Greet CLI

A simple greeting CLI tool built with TypeScript.

## Installation

```bash
npm install -g cli
```

## Usage

```bash
# Default greeting
greet-cli
# Output: Hello, world!

# Personalized greeting
greet-cli Alice
# Output: Hello, Alice!
```

## Development

```bash
# Install dependencies
pnpm install

# Build the CLI
pnpm build

# Test locally
node dist/index.js [name]

# Link globally for testing
pnpm link --global
```

## Features

- Simple command-line interface
- Personalized greetings
- Built with TypeScript
- Part of a pnpm monorepo 