[![Netlify Status](https://api.netlify.com/api/v1/badges/71c82350-3828-425b-a8d9-6b4411e6ec60/deploy-status)](https://app.netlify.com/sites/bobax/deploys)

### [Preview the Web Application](https://bobax.netlify.app/)

# BobaX Project

This is a React project for a boba website that uses TypeScript, Yarn, ESLint, and Storybook.

## 1. Getting Started & Requirements

To get started with this project, follow these steps:

- Clone this repository to your local machine using

`git clone git@github.com:shipmunkdev/bobax-web.git`

- Install Docker from https://docs.docker.com/engine/install

## 2. Create `.env` for local development

```
# Local API endpoint
REACT_APP_BOBA_FETCH='http://localhost:8000'

# Allow CORS for local development
ALLOW_CORS=http://localhost:3000
```

## 3. Web App

### Inside the project root directory:

```
yarn install
yarn start
```

> This will launch BobaX web application at http://localhost:3000

## 4. Backend App

To spin-up Backend docker container, without active backend development

```
docker-compose up -d --build
```

You may start/stop/pause Docker container from Docker desktop application in the Dashboard

> This will enable api endpoints at http://localhost:8000 to query with GraphQL

## 5. Storybook Testing

### `yarn storybook`

Launches Storybook, an isolated development environment for UI components.

## For active backend development,

Terminate `backend-app` Docker container and use `uvicorn` for live reload instead.

Refer [detailed local dev set-up guide](docs/dev_set_up.md) at `docs/dev_set_up.md`

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
