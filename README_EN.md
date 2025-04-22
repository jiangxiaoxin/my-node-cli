# my-node-cli

A simple command-line tool to display date and time information.

## Features

- Display current date and time
- Show only date or time
- Colorful output
- Environment variable support
- TypeScript support with source maps

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-node-cli.git
cd my-node-cli

# Install dependencies
npm install
```

## Usage

```bash
# Show current date and time
npm start

# Show only date
npm start -- --date

# Show only time
npm start -- --time

# Development mode (runs TypeScript directly)
npm run dev

# Development mode with date option
npm run dev -- --date
```

## Development

This project uses TypeScript and ts-node for development. The following commands are available:

```bash
# Run in development mode (directly executes TypeScript)
npm run dev

# Build the project
npm run build

# Type checking
npm run type-check

# Format code
npm run format

# Check formatting
npm run format:check
```

## Debugging

The project is configured for debugging in VSCode:

1. Open the project in VSCode
2. Set breakpoints in your TypeScript files
3. Press F5 to start debugging
4. Choose either "Debug my-node-cli (无参数)" or "Debug my-node-cli (带参数)"

## Environment Variables

The following environment variables can be set:

- `NODE_ENV`: Set to "development" or "production" (default: "development")

## License

MIT
