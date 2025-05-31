# PNPM Monorepo

A TypeScript monorepo built with pnpm workspaces, featuring a CLI application and reusable packages.

## 📁 Project Structure

```
pnpm-monorepo/
├── apps/
│   └── cli/                    # CLI application
│       ├── index.ts           # Main CLI entry point
│       ├── index.test.ts      # CLI tests
│       └── package.json
├── packages/
│   └── greetings/             # Reusable greeting utilities
│       ├── index.ts           # Greeting functions
│       ├── index.test.ts      # Greeting tests
│       └── package.json
├── .vscode/                   # VS Code configuration
│   ├── extensions.json        # Recommended extensions
│   └── settings.json          # Workspace settings
├── vitest.config.ts           # Test configuration
├── tsconfig.json              # TypeScript configuration
├── biome.json                 # Code formatting/linting
├── pnpm-workspace.yaml        # Workspace configuration
└── package.json               # Root package configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pnpm-monorepo

# Install dependencies
pnpm install
```

## 📦 Packages

### CLI App (`apps/cli`)

A simple greeting CLI that demonstrates the use of the shared `greetings` package.

```bash
# Run the CLI
pnpm --filter cli start

# Run with a name
pnpm --filter cli start Alice
```

**Output:**
```
Hello, world!      # No arguments
Hello, Alice!      # With name argument
```

### Greetings Package (`packages/greetings`)

A reusable TypeScript package that provides greeting utilities.

**Functions:**
- `greet(name: string)` - Returns a personalized greeting
- `greetDefault()` - Returns the default greeting
- `handleCliArgs(args: string[])` - Processes CLI arguments and returns appropriate greeting

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for fast, modern testing.

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests for specific package
pnpm --filter cli test
pnpm --filter greetings test
```

### Test Structure

- **Unit Tests**: Each package has comprehensive test coverage
- **CLI Tests**: Tests for argument handling and output logic
- **Greeting Tests**: Tests for all greeting functions and edge cases

## 🛠️ Development

### Available Scripts

**Root Level:**
```bash
pnpm test              # Run all tests
pnpm test:watch        # Run tests in watch mode
pnpm test:coverage     # Run tests with coverage
pnpm check             # Run code quality checks (Biome)
```

**CLI App:**
```bash
pnpm --filter cli start     # Run the CLI
pnpm --filter cli dev       # Run in development mode
pnpm --filter cli test      # Run CLI tests
```

**Greetings Package:**
```bash
pnpm --filter greetings test # Run package tests
```

### Code Quality

This project uses [Biome](https://biomejs.dev/) for:
- **Formatting**: Automatic code formatting
- **Linting**: Code quality and style enforcement

```bash
# Check and fix code quality issues
pnpm check
```

### VS Code Integration

The project includes VS Code configuration for an optimal development experience:

#### Recommended Extensions
- **Vitest Explorer** - Visual test runner
- **Biome** - Formatting and linting

#### Features
- Format on save with Biome
- TypeScript intellisense
- Integrated test running and debugging

#### Installing Extensions
VS Code will prompt you to install recommended extensions when you open the workspace.

## 🏗️ Architecture

### Monorepo Benefits
- **Code Sharing**: Packages can be easily shared between apps
- **Consistent Tooling**: Unified testing, linting, and formatting
- **Type Safety**: Full TypeScript support across all packages
- **Development Efficiency**: Changes to packages are immediately available to apps

### Package Dependencies
```
apps/cli
  └── depends on → packages/greetings
```

### Technology Stack
- **Package Manager**: pnpm with workspaces
- **Language**: TypeScript
- **Testing**: Vitest
- **Code Quality**: Biome
- **Runtime**: Node.js with tsx for development

## 📝 Adding New Packages

### 1. Create Package Structure
```bash
mkdir -p packages/new-package
cd packages/new-package
```

### 2. Create package.json
```json
{
  "name": "new-package",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest watch"
  },
  "devDependencies": {
    "vitest": "^3.1.4"
  }
}
```

### 3. Add to Workspace
Packages in `packages/*` are automatically included via `pnpm-workspace.yaml`.

### 4. Install Dependencies
```bash
# From root
pnpm install
```

## 🔧 Troubleshooting

### Common Issues

**TypeScript Errors with console:**
- Ensure `@types/node` is installed and `types: ["node"]` is in tsconfig.json

**Test Not Found:**
- Make sure test files end with `.test.ts` or `.spec.ts`
- Check that files are not excluded in `vitest.config.ts`

**Package Not Found:**
- Run `pnpm install` from the root directory
- Check `pnpm-workspace.yaml` includes your package directory

## 📄 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run `pnpm check` to ensure code quality
6. Submit a pull request

---

**Happy coding!** 🎉 