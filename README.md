# Global Kill

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Global Kill is a convenient package that enables you to disable certain features of your code with ease. [This package draws inspiration from Cloudflare.](https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/#:~:text=Every%20feature%20Cloudflare%20ships%20has%20a%20corresponding%20feature%20flag%2C%20which%20we%20call%20a%20%E2%80%98global%20kill%E2%80%99.)

## Install

npm:

```sh
npm install global-kill
```

yarn:

```sh
yarn add global-kill
```

pnpm:

```sh
pnpm add global-kill
```

## Usage

### Importing the module

```js
const { GlobalKill } = require("global-kill")
```

or in ES6

```js
import { GlobalKill } from "global-kill"
```

### Example

```js
const { GlobalKill } = require("global-kill")

// Create a new module
const sumOperations = new GlobalKill.module("sumOperations")

function sum(a, b) {
	// Check if the module is enabled
	if (sumOperations.enabled) {
		return a + b
	}

	return 0
}
```

### Creating a new module

To create a new module

You can use `GlobalKill.module` constructor:

```js
const feature = new GlobalKill.module("myFeature")
```

You can also create a module that is disabled by default:

```js
const feature = GlobalKill.module("myFeature", false)
```

### Enabling and disabling a module

To enable or disable a module, you can use the `enable` and `disable`  methods:

```js
const feature = new GlobalKill.module("myFeature")

feature.enable() // Enables the module
feature.disable() // Disables the module
```

### Removing a module

To remove a module, you can use the `remove` method:

```js
const feature = new GlobalKill.module("myFeature")

feature.remove() // Removes the module
```

### Getting a module

To get a module by name

You can use the `get` method:

```js
const feature = GlobalKill.get("myFeature")
```

### Resetting all modules

To reset all modules

You can use the `reset` method:

```js
GlobalKill.reset() // Resets all modules
```

## Contributing

Contributions, issues and feature requests are welcome!

PR Checklist

- Code is up-to-date with the `main` branch
- `npm run lint` passes with this change
- `npm run test` passes with this change
- This pull request links relevant issues as `Fixes #0000`
- There are new or updated unit tests validating the change
- Documentation has been updated to reflect this change
- The new commits follow conventions outlined in the [conventional commit spec](https://www.conventionalcommits.org/en/v1.0.0/)

## License

MIT © [net-tech-#7475](https://nettech.dev)

## Donate

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q4ALQ07)

[build-img]: https://github.com/net-tech/global-kill/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/net-tech/global-kill/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/global-kill
[downloads-url]: https://www.npmtrends.com/global-kill
[npm-img]: https://img.shields.io/npm/v/global-kill
[npm-url]: https://www.npmjs.com/package/global-kill
[issues-img]: https://img.shields.io/github/issues/net-tech/global-kill
[issues-url]: https://github.com/net-tech/global-kill/issues
[codecov-img]: https://codecov.io/gh/net-tech/global-kill/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/net-tech/global-kill
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
