# JulyBatch
Sessions for July batch

# Playwright Test Demo

This project demonstrates the use of Playwright for end-to-end testing. It includes multiple test cases for UI components, auto-waiting, and assertions.

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (version 16 or higher is recommended).
2. Install Playwright by running the following command:
   ```sh
   npm install
   ```

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory:
   ```sh
   cd test-demo
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Configuration

1. Open the `playwright.config.ts` file located in the root directory.
2. Update the `SERVER_PATH` constant to match the path to your local server directory:
   ```typescript
   const SERVER_PATH = "C:\\Path\\To\\Your\\Server";
   ```

## Running Tests

### Run All Tests
To run all tests, execute the following command:
```sh
npx playwright test
```

### Run Tests in UI Mode
To run tests in Playwright's interactive UI mode, use:
```sh
npm run ui
```

### View Test Reports
After running tests, an HTML report will be generated in the `playwright-report` directory. Open `playwright-report/index.html` in your browser to view the results.

## Folder Structure

- `tests/`: Contains all the test files.
- `playwright.config.ts`: Configuration file for Playwright.
- `.vscode/`: Contains workspace-specific settings and recommended extensions.
- `playwright-report/`: Stores the HTML test reports.
- `test-results/`: Stores test result artifacts.

## Recommended Extensions

Install the following extensions in Visual Studio Code for a better development experience:
1. [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Notes

- Ensure that the server is running before executing the tests. The server will automatically start if configured correctly in the `playwright.config.ts` file.
- Update the `SERVER_PATH` constant in `playwright.config.ts` to match your local server path.

## Troubleshooting

- If tests fail due to a timeout, increase the `timeout` value in `playwright.config.ts`.
- For debugging, use the Playwright UI mode (`npm run ui`) to inspect test execution.



## Author
Cyril
