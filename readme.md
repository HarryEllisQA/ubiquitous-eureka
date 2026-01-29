## DemoBlaze Technical Assessment
This repository contains all of the information required to complete the technical assessment for the Senior Test Engineer position @ Companies House. To clone and run this project:

 1. Clone the repository to a local folder and open it in an IDE of choice (VS Code recommended).
 2. Open a terminal and run **npm install** to install the correct packages.
 3. Next run **npx playwright install** to install the browsers Playwright requires for running tests.
 4. If using Visual Studio Code, the *Playwright Test for VSCode* extension is worth installing, as it allows you to seamlessly run tests from within the UI.
 5. To run tests without the UI, or in an IDE other than VSCode, use one of the below commands:
 - **npx playwright test** - This will run all tests across Chromium, Firefox, and Webkit.
 - **npx playwright test --project** ***[chromium | firefox | webkit]*** - The *--project* flag allows you to specify what browser you wish to use.
 - **npx playwright test --headed** - The *--headed* flag allows you to run the project in headed mode to witness the automation in real-time.
 - **npx playwright show-report** - This launches the HTML report for interacting with test results.

The test cases can be found inside of *.\tests\assessment-tests.spec.ts*.
The test plan, and a companion piece breaking down my rationale throughout this assessment, and an example defect report can be found in *.\documentation*.