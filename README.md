# Lotto24 Playwright project

## Preconditions
* npm
* docker (for running tests in a container)

## How to install
`npm i`

## How to run tests
`npx playwright test`

## How to contribute
Just make a pull request with new tests!

## How to maintain project
Please keep project structure:
* /tests - folder with .spec.js files (grouped in subfolders), the tests are made using steps described in PageObjects.
* /testData - some additional data for tests
* /helpers - classes with API helper functions
* package.json - package file for npm so that you can install all the dependencies with a single `npm i` command
* playwright.config.js - configuration file with Playwright options
* /playwright-report - folder for test reports
* /test-results - folder for tests output
* Dockerfile - for tests dockerization

## How to dockerize
`docker build . -f Dockerfile -t lotto24`

`docker run lotto24`
