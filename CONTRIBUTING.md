# Contributing Guidelines

Thank you for considering contributing to our project! We welcome all contributions that help improve our project.

## Ways to Contribute

You can contribute to our project in several ways:

- Reporting issues: If you encounter any bugs or have any suggestions for improvements, please let us know by creating an issue in our GitHub repository.
- Fixing bugs: If you notice any bugs, you can submit a pull request that fixes the issue.
- Adding features: If you have an idea for a new feature, please create an issue first to discuss the feature with the maintainers.
- Improving documentation: If you find any issues with our documentation, you can submit a pull request that improves the documentation.

## Getting Started

To get started contributing to our project, follow these steps:

- Fork our repository on GitHub.
- Clone your forked repository to your local machine.
- Install the project dependencies by running `yarn` in the project directory.
- Create a new branch for your changes using `git checkout -b name-of-author/BOBA-123-name-of-the-feature`.
- Make your changes and commit them with a descriptive commit message.
- Push your changes to your forked repository.
- Create a pull request to our repository and describe your changes.
- Assign yourself in Assignee and add labels such `Enhancements`, `CICD`, `Bug`, etc.
- Ensure the project is following [Airbnb](https://github.com/airbnb/javascript/tree/master/react) styleguide.

## Git branch naming

When contributing to a project that uses the branch format of `name-of-author/BOBA-123-name-of-the-feature`, it's important to follow the naming convention for your branch name.

- The `name-of-author` should be your GitHub username or your actual name, which will help other contributors and maintainers easily identify who is responsible for the changes made in the branch.

- The `BOBA-123` should be replaced with the corresponding issue number that the branch is addressing. This ensures that the changes made in the branch are related to a specific issue and can be easily tracked and reviewed.

- The `name-of-the-feature` should be a brief and descriptive name of the feature or bugfix that the branch is addressing. This helps other contributors and maintainers to understand the purpose of the branch and what changes are being made.

By following this naming convention, contributors can ensure that their contributions are organized, easy to track, and follow a consistent structure. This makes it easier for other contributors and maintainers to understand the changes being made and review them effectively.

## Pull Request Review

1. When submitting a pull request, it's important to follow a consistent format for the title. The title should be in the format of `[BOBA-123] Short Description of Features`.

- The `[BOBA-123]` portion of the title should be replaced with the corresponding issue number that the pull request is addressing. This ensures that the pull request is associated with the correct issue and helps with tracking and organization.

- The `Short Description of Features` portion of the title should be a brief summary of the changes made in the pull request. This should provide other contributors and maintainers with a clear understanding of the purpose and scope of the changes being made.

2. This project utilizes GitHub Actions to ensure that the codebase meets certain standards before it can be reviewed and merged. The pipeline checks the code using ESLint and Prettier, to ensure that it adheres to the project's coding standards, as well as Storybook, to ensure that all components are rendered correctly.

- When a pull request is created, the pipeline is triggered automatically. If the code does not pass the checks, the pull request will not be reviewed until the issues are fixed. This ensures that the project is maintainable and consistent, and that code quality is not compromised.

- Once the code passes the checks, it will be reviewed by the team and, if approved, merged into the develop branch. This process ensures that the codebase is always up-to-date and consistent with the coding standards, while also preventing any regressions or issues from being introduced into the codebase.

## Code of Conduct

Please note that we have a Code of Conduct in place that all contributors are expected to follow.

## Contact

If you have any questions about contributing to our project, please feel free to reach out to us by creating an issue in our GitHub repository.
