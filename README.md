[![Netlify Status](https://api.netlify.com/api/v1/badges/71c82350-3828-425b-a8d9-6b4411e6ec60/deploy-status)](https://app.netlify.com/sites/bobax/deploys)

### [Preview the Web Application](https://bobax.netlify.app/)

# BobaX Project

## This is a React project for a boba website that uses TypeScript, Yarn, ESLint, and Storybook.

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine using `git clone git@github.com:shipmunkdev/bobax-web.git`
- Open http://localhost:3000 to view the web application in the browser.
- Open http://localhost:8000/docs or its relevant endpoints `boba_list` to view the backend in the browser.

## Create `.env` for local development

```
# Local API endpoint
REACT_APP_BOBA_FETCH='http://localhost:8000'

# Allow CORS for local development
ALLOW_CORS=http://localhost:3000
```

## Inside the project root directory:

```
yarn install
yarn start
```

> This will launch BobaX web application

## UI Miscellaneous

| Command               | Description                                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn start`          | Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.                                                                                                                                                      |
| `yarn build`          | Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! |
| `yarn test`           | Launches the test runner in the interactive watch mode.                                                                                                                                                                                          |
| `yarn lint`           | Runs ESLint to check for any linting errors in the project.                                                                                                                                                                                      |
| `yarn lint:fix`       | Runs ESLint to fix for any linting errors in the project.                                                                                                                                                                                        |
| `yarn format`         | Runs Prettier to fix for any formatting errors in the project.                                                                                                                                                                                   |
| `yarn storybook`      | Launches Storybook, an isolated development environment for UI components.                                                                                                                                                                       |
| `yarn test-storybook` | Requires `yarn storybook` instance to be running before running this command. Launches Storybook Test Runner, an isolated development environment for testing UI components.                                                                     |

## Inside backend directory:

> It is important to cd into backend folder before running the next step.

```
cd backend/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

> Make sure to run `uvicorn main:app --reload` before front-end server `yarn start` to fully functionable.

### Open a browser and test out GraphQL locally

Visit `http://localhost:8000/boba_list` to query BobaList

## Backend Miscellaneous

| Command                           | Description                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `python -m venv venv`             | Creates a virtual environment named `venv` for isolating the project's dependencies.                                  |
| `source venv/bin/activate`        | Activates the virtual environment, allowing you to use the isolated Python environment.                               |
| `deactivate`                      | Exits the virtual environment (venv).                                                                                 |
| `pip install -r requirements.txt` | Installs the required Python packages specified in the `requirements.txt` file.                                       |
| `pip freeze > requirements.txt`   | Records the current package list into requirements.txt. Make sure to run this command after installing new libraries. |
| `uvicorn main:app --reload`       | Runs the code inside the backend folder to start up the backend server.                                               |

## For deployment-related documentation, please visit [docs/DeployBackend.MD](docs/DeployBackend.MD).

## Project Structure

The project has the following directory structure:

```
bobax-project/        - Main project folder
node_modules/         - Folder containing all installed dependencies
.github/workflows     - Folder containing GitHub Actions workflows
README.md             - A file containing project development setup documentation
package.json          - A file containing project metadata and dependencies
yarn.lock             - A file containing exact versions of all installed dependencies
tsconfig.json         - A file containing TypeScript compiler options
public/               - Folder containing public files
    index.html        - The main HTML file that is used to render the app
    favicon.ico       - The favicon for the app
docs/                 - Folder containing project documentation
backend/              - Folder containing backend code
    venv/             - Folder containing Python virtual environment
    database/         - Folder containing database related files
    BobaList/         - Folder containing BobaList related files
    main.py           - The main Python file for the backend
    requirement.txt   - A file containing Python dependencies
    Spacefile         - A file containing deployment configuration
src/                  - Folder containing source code
    index.tsx         - The main entry point for the app
    assets/                 - Folder containing assets used in the app
    components/             - Folder containing UI components
        Button/             - A sub-folder containing a Button component
            index.tsx       - The code for the Button component
        Card/               - A sub-folder containing a Card component
            index.tsx       - The code for the Card component
    pages/                  - Folder containing page components
        Main/               - A sub-folder containing the main page component
            index.tsx       - The code for the main page component
        Home/               - A sub-folder containing the home page component
            index.tsx       - The code for the home page component
    stories/                - Folder containing Storybook stories
        Button.stories.tsx  - The story for the Button component
        Card.stories.tsx    - The story for the Card component
    types/               - Folder containing TypeScript types
    hooks/               - Folder containing custom React hooks
    utils/               - Folder containing utility functions and modules
```

## Contributing

If you would like to contribute to this project, please follow the guidelines outlined in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
