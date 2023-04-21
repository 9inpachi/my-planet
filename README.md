# My Planet

A small planet with procedurally generated objects placed over continents.

## Setup

Make sure you have [Node.js](https://nodejs.org/en/download) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) installed.

Install dependencies and start the application.

```sh
yarn install
yarn start
```

Navigate to [http://localhost:5173](http://localhost:5173) on the browser to access the application.

## Release

[Release It!](https://github.com/release-it/release-it) is used to release the application. Use the following command to initiate the release.

```sh
yarn release
```

It will create a new tag and a draft release. Manually pubishing the draft release will trigger a [GitHub Actions workflow](./.github/workflows/deploy.yml) which will deploy the application on the `gh-pages` branch using GitHub Pages.
