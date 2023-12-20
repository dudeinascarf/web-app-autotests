# E2E autotests based on Playwright

This is a testing framework using Playwright for end-to-end testing. It's configured to work with a web server running a [React Query RealWorld](https://github.com/dudeinascarf/react-query-realworld) application.

## Prerequisites

- Node.js and npm installed on your machine (I prefer to use [nvm](https://github.com/nvm-sh/nvm))
- A `.env` file in the root of the project. Here are the minimum required environment variables:

    ```env
    NODE_ENV=dev
    HEADLESS=false
    DEVICE=DESKTOP
    DEVICES_COUNT=1
    ```

- The React Query RealWorld application in a sibling directory to this project, i.e., both projects should be in the same parent directory.

## Setup

1. Clone repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:

    ```bash
    npm i
    ```

4. _**(If you want to run the tests locally):**_ Make sure the [React Query RealWorld](https://github.com/dudeinascarf/react-query-realworld) is setup and ready to be started. It should be in a directory at `../react-query-realworld` relative to this project.
Update the `dev.json` file in the `config/` directory with the relevant link to your local host.
Dont forgot to build the project:

    ```bash
    npm run build
    ```

## Running Tests

To run all the tests, use the following command:

```bash
npx playwright test
```
Or check the `scripts` section of the `package.json` file for other options.