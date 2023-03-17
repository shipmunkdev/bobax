[![Netlify Status](https://api.netlify.com/api/v1/badges/71c82350-3828-425b-a8d9-6b4411e6ec60/deploy-status)](https://app.netlify.com/sites/bobax/deploys)

# Getting Started with Boba X

Ensure the project is following [Airbnb](https://github.com/airbnb/javascript/tree/master/react) styleguide.

# Boba Project

## This is a React project for a boba website that uses TypeScript, Yarn, ESLint, and Storybook.

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine using git clone.
- Install the necessary dependencies using yarn install.
- Start the development server using yarn start.
- Open http://localhost:3000 to view the app in the browser.

## Available Scripts

In the project directory, you can run:

## `yarn start`

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## `yarn build`

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## `yarn test`

Launches the test runner in the interactive watch mode.

## `yarn lint`

Runs ESLint to check for any linting errors in the project.

## `yarn lint:fix`

Runs ESLint to fix for any linting errors in the project.

## `yarn format`

Runs Prettier to fix for any formatting errors in the project.

## `yarn storybook`

Launches Storybook, an isolated development environment for UI components.

## `yarn test-storybook`

Requires `yarn storybook` instance to be running before running this command.
Launches Storybook Test Runner, an isolated development environment for testing UI components.

## Project Structure

The project has the following directory structure:

```
bobax-project/        - Main project folder
node_modules/         - Folder containing all installed dependencies
.github/workflows     - Folder containing GitHub Actions workflows
README.md             - A file containing project documentation
package.json          - A file containing project metadata and dependencies
tsconfig.json         - A file containing TypeScript compiler options
yarn.lock             - A file containing exact versions of all installed dependencies
public/               - Folder containing public files
    index.html        - The main HTML file that is used to render the app
    favicon.ico       - The favicon for the app
src/                  - Folder containing source code
    index.tsx         - The main entry point for the app
assets/              - Folder containing assets used in the app
components/          - Folder containing UI components
    Button/           - A sub-folder containing a Button component
        index.tsx     - The code for the Button component
    Card/             - A sub-folder containing a Card component
        index.tsx     - The code for the Card component
pages/               - Folder containing page components
    Main/            - A sub-folder containing the main page component
        index.tsx    - The code for the main page component
    Home/            - A sub-folder containing the home page component
        index.tsx    - The code for the home page component
stories/             - Folder containing Storybook stories
    Button.stories.tsx - The story for the Button component
    Card.stories.tsx   - The story for the Card component
types/               - Folder containing TypeScript types
hooks/               - Folder containing custom React hooks
utils/               - Folder containing utility functions and modules
```

## Contributing

If you would like to contribute to this project, please follow the guidelines outlined in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
