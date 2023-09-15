## Web App

To set up the web application, follow these steps inside the project root directory:

1. Run `yarn install` to install the necessary dependencies.
2. Run `yarn start` to launch the BobaX web application.

> This will launch BobaX web application at http://localhost:3000

## UI Miscellaneous Commands

| Command               | Description                                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn start`          | Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.                                                                                                                                                      |
| `yarn build`          | Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! |
| `yarn test`           | Launches the test runner in the interactive watch mode.                                                                                                                                                                                          |
| `yarn lint`           | Runs ESLint to check for any linting errors in the project.                                                                                                                                                                                      |
| `yarn lint:fix`       | Runs ESLint to fix any linting errors in the project.                                                                                                                                                                                            |
| `yarn format`         | Runs Prettier to fix any formatting errors in the project.                                                                                                                                                                                       |
| `yarn storybook`      | Launches Storybook, an isolated development environment for UI components.                                                                                                                                                                       |
| `yarn test-storybook` | Requires a running instance of `yarn storybook`. Launches Storybook Test Runner, an isolated development environment for testing UI components.                                                                                                  |

## Backend App for Active Development with `uvicorn`

## Inside backend directory:

> It is important to cd into backend folder before running the next step.

```
cd backend/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

> Note: Make sure to run `uvicorn main:app --reload` before starting the front-end server (`yarn start`) for full functionality.

### Testing GraphQL Locally

To test GraphQL locally, open a browser and visit `http://localhost:8000/boba_list` to query BobaList.

## Backend Miscellaneous Commands

| Command                           | Description                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `python -m venv venv`             | Creates a virtual environment named `venv` for isolating the project's dependencies.                                    |
| `source venv/bin/activate`        | Activates the virtual environment, allowing you to use the isolated Python environment.                                 |
| `deactivate`                      | Exits the virtual environment (`venv`).                                                                                 |
| `pip install -r requirements.txt` | Installs the required Python packages specified in the `requirements.txt` file.                                         |
| `pip freeze > requirements.txt`   | Records the current package list into `requirements.txt`. Make sure to run this command after installing new libraries. |
| `uvicorn main:app --reload`       | Runs the code inside the backend folder to start up the backend server.                                                 |

## Testing: Storybook for UI Components

To test UI components using Storybook, use the following commands:

| Command               | Description                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn storybook`      | Launches Storybook, an isolated development environment for UI components.                                                                      |
| `yarn test-storybook` | Requires a running instance of `yarn storybook`. Launches Storybook Test Runner, an isolated development environment for testing UI components. |
