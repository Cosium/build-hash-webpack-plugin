# build-hash-webpack-plugin
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/build-hash-webpack-plugin.png)](https://www.npmjs.com/package/build-hash-webpack-plugin)

Webpack plugin that emits a json file contaning the build hash.

## Why Is This Useful?

For each build, Webpack generates an in-memory hash allowing to know if two build outputs are the same or not.

This plug-in outputs a json file contaning this described build hash.

This can be especially useful when you want to check if a new version of a Single Page Application (SPA) runned by your user's browser is available. The SPA would then, periodically, compare the remote hash with the initial hash and trigger a reload in case of mismatch.

### Example output:

The output is a JSON object in the form:

```json
{"hash":"68aaedf27867fc4cb95d"}
```

## Install

```sh
yarn add -D build-hash-webpack-plugin
```

## Configuration

In your webpack config include the plug-in. And add it to your config:

```js
import BuildHashPlugin from 'build-hash-webpack-plugin';
// ...
module.exports = {
    // ....
    plugins: [new BuildHashPlugin()]
}
```

### Options

You can pass the following options:

#### `filename`

Optional. `build-hash.json` by default.

Name for the created json file.

```js
new BuildHashPlugin({filename: 'build-hash.json'})
```
