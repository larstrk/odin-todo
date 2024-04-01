# odin-todo

This is a quick guide to set up the development environment for the project.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm: [Download here](https://nodejs.org/)
- Webpack: Run `npm install -g webpack` if you haven't installed it globally.
- Tailwind CSS: Run `npm install -g tailwindcss` if you haven't installed it globally.

## Development Setup

Follow these steps to set up the development environment:

1. Clone the repository
2. Install dependencies:
   `npm install`
3. Run Webpack in watch mode to automatically bundle your JavaScript files:
   `npx webpack --watch`
4. Run Tailwind CSS in watch mode to automatically generate your CSS files:
   `npx tailwindcss -i ./src/style.css -o ./src/output.css --watch`

## Usage

Once the development environment is set up, you can start working on your project. Any changes made to your JavaScript files will be automatically bundled by Webpack, and any changes made to your CSS files will be automatically processed by Tailwind CSS.
