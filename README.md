# BookingCypressProject

This project automates the user registration functionality on Booking.com using Cypress. It tests the registration process up to the CAPTCHA step and integrates Mochawesome for detailed test reporting.

## Installation

Follow these steps to install and run the project locally:

1. Clone the repository:
```bash
git clone https://github.com/OleksandraMed/BookingCypressProject.git
```
2. Navigate to the project directory:
```bash
cd BookingCypressProject
```
3. Install the project dependencies:
```bash
npm install
```

### To run the Cypress tests for this project, use one of the following commands:

- Open Cypress in interactive mode:
```bash
npx cypress open
```
- Run the tests headlessly using Chrome:
```bash
 npm test
 ```
Test report will be generated using Mochawesome.

### Running Tests
- To run the tests with retries and generate test reports:
```bash
npm run test 
  ```
- To manually merge Mochawesome reports and generate the final HTML report:

```bash
npm run merge-reports
npm run generate-htmlreport
```

## Features
1. Cypress Integration: Uses Cypress for end-to-end testing.
2. Mochawesome Reporting: Generates detailed test reports in both JSON and HTML formats.
3. Retries: Automatically retries failed tests based on configuration.
4. Page Object Model: Implements Page Objects for better code maintainability.