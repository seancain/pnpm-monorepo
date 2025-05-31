# PNPM Monorepo

A TypeScript monorepo built with pnpm workspaces, featuring a CLI application and reusable packages with full TypeScript compilation and distribution support.

## 📁 Project Structure

```
pnpm-monorepo/
├── apps/
│   └── cli/                    # CLI application
│       ├── index.ts           # Main CLI entry point
│       ├── index.test.ts      # CLI tests
│       ├── README.md          # CLI-specific documentation
│       ├── tsconfig.json      # CLI TypeScript configuration
│       ├── dist/              # Compiled output (after build)
│       └── package.json       # CLI package configuration
├── packages/
│   └── greetings/             # Reusable greeting utilities
│       ├── index.ts           # Greeting functions
│       ├── index.test.ts      # Greeting tests
│       ├── index.js           # Compiled JavaScript (after build)
│       ├── tsconfig.json      # Package TypeScript configuration
│       ├── dist/              # Compiled output with types (after build)
│       └── package.json       # Package configuration
├── .vscode/                   # VS Code configuration
│   ├── extensions.json        # Recommended extensions
│   └── settings.json          # Workspace settings
├── vitest.config.ts           # Test configuration
├── tsconfig.json              # Root TypeScript configuration
├── biome.json                 # Code formatting/linting
├── .npmrc                     # PNPM configuration
├── pnpm-workspace.yaml        # Workspace configuration
└── package.json               # Root package configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js
- pnpm

### Installation & Build

```bash
# Clone the repository
git clone <repository-url>
cd pnpm-monorepo

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

## 📦 Packages

### CLI App (`apps/cli`)

A distributable greeting CLI tool that demonstrates the use of the shared `greetings` package. The CLI is built as a standalone binary and can be installed globally.

#### Development Usage
```bash
# Run in development mode
pnpm dev

# Run the CLI in development
pnpm --filter cli start

# Run with a name
pnpm --filter cli start Alice

# Build the CLI
pnpm --filter cli build
```

#### Production Usage
```bash
# Build and run from root
pnpm start

# Or install globally after building
npm install -g ./apps/cli
greet-cli              # Hello, world!
greet-cli Alice        # Hello, Alice!
```

**Output:**
```
Hello, world!      # No arguments
Hello, Alice!      # With name argument
```

### Greetings Package (`packages/greetings`)

A reusable TypeScript package that provides greeting utilities with full TypeScript declarations and CommonJS output.

**Functions:**
- `greet(name: string)` - Returns a personalized greeting
- `greetDefault()` - Returns the default greeting
- `handleCliArgs(args: string[])` - Processes CLI arguments and returns appropriate greeting

#### Build Output
- **JavaScript**: `dist/index.js` (CommonJS)
- **TypeScript Declarations**: `dist/index.d.ts`

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
pnpm dev              # Run CLI in development mode
pnpm build            # Build all packages and create distribution
pnpm start            # Build and run the CLI
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage
pnpm check            # Run code quality checks (Biome)
```

**CLI App:**
```bash
pnpm --filter cli build     # Build the CLI package
pnpm --filter cli start     # Run the CLI in development
pnpm --filter cli dev       # Run in development mode with watch
pnpm --filter cli test      # Run CLI tests
```

**Greetings Package:**
```bash
pnpm --filter greetings build # Build the package with TypeScript
pnpm --filter greetings test  # Run package tests
```

### Build System

This project uses **TypeScript compilation** with:
- **Individual configs**: Each package has its own `tsconfig.json`
- **CommonJS output**: For Node.js compatibility
- **Type declarations**: Full `.d.ts` generation for packages
- **Workspace injection**: Dependencies automatically linked via pnpm
- **Source maps**: Enabled for enhanced debugging experience

#### Build Configuration
- **Target**: ES2022 for modern Node.js support
- **Module**: CommonJS for maximum compatibility
- **Output**: `dist/` directory in each package
- **Types**: Automatic generation for library packages
- **Source Maps**: Generated for all compiled code with inline sources

#### Debugging Support

Source maps are enabled across the entire monorepo for enhanced debugging:

**Features:**
- **Stack Traces**: Error stack traces show original TypeScript line numbers
- **IDE Debugging**: Full debugging support in VS Code and other IDEs
- **Production Debugging**: Source maps help trace issues in deployed code
- **Cross-Package Debugging**: Debug seamlessly across monorepo packages

**Generated Files:**
- `dist/*.js` - Compiled JavaScript
- `dist/*.js.map` - Source map files
- `dist/*.d.ts` - TypeScript declarations

**Benefits:**
- Meaningful error messages in production
- Better development debugging experience
- Easier troubleshooting across package boundaries
- Enhanced test debugging with Vitest

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
- **Type Safety**: Full TypeScript support with declaration generation
- **Development Efficiency**: Changes to packages are immediately available to apps
- **Distribution Ready**: Built packages ready for npm publishing

### Package Dependencies
```
apps/cli
  └── depends on → packages/greetings (workspace:*)
```

### Technology Stack
- **Package Manager**: pnpm with workspaces and injection
- **Language**: TypeScript with CommonJS compilation
- **Testing**: Vitest
- **Code Quality**: Biome
- **Runtime**: Node.js with tsx for development
- **CLI**: Executable binary with shebang support

## 📦 Distribution

### CLI Distribution
The CLI app is configured as a distributable package:
- **Binary**: `greet-cli` command available after global install
- **Shebang**: `#!/usr/bin/env node` for direct execution
- **Files**: Only includes compiled `dist/index.js`

### Package Distribution
The greetings package is ready for npm publishing:
- **Main**: Points to compiled JavaScript
- **Types**: Includes TypeScript declarations
- **Files**: Only includes compiled output and types

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
  "description": "Description of your package",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "vitest run",
    "test:watch": "vitest watch"
  },
  "files": ["dist/**/*.js", "dist/**/*.d.ts"],
  "devDependencies": {
    "vitest": "^3.1.4"
  }
}
```

### 3. Create tsconfig.json
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "declaration": true,
    "rootDir": "."
  },
  "include": ["*.ts"],
  "exclude": ["**/*.test.ts", "**/*.spec.ts", "node_modules", "dist", "coverage"]
}
```

### 4. Add to Workspace
Packages in `packages/*` are automatically included via `pnpm-workspace.yaml`.

### 5. Install Dependencies
```bash
# From root
pnpm install
```

## 🔧 Troubleshooting

### Common Issues

**Build Errors:**
- Ensure each package has its own `tsconfig.json`
- Check that `dist/` directories are in `.gitignore`
- Run `pnpm build` before running the CLI

**TypeScript Errors:**
- Ensure `@types/node` is installed and `types: ["node"]` is in tsconfig.json
- Check module resolution settings in individual package configs

**CLI Not Found:**
- Build the project first: `pnpm build`
- For global install: `npm install -g ./apps/cli` after building

**Test Not Found:**
- Make sure test files end with `.test.ts` or `.spec.ts`
- Check that files are not excluded in `vitest.config.ts`

**Package Not Found:**
- Run `pnpm install` from the root directory
- Check `pnpm-workspace.yaml` includes your package directory
- Ensure workspace injection is enabled in `.npmrc`

## 📄 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run `pnpm build` to ensure everything compiles
6. Run `pnpm check` to ensure code quality
7. Submit a pull request

---

**Happy coding!** 🎉 