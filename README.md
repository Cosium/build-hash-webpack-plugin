# build-hash-webpack-plugin
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/build-hash-webpack-plugin.png)](https://www.npmjs.com/package/build-hash-webpack-plugin)

Webpack plugin that emits a json file contaning the build hash.

## Why Is This Useful?

When working with Webpack you might want to generate your build hash.

This plug-in outputs a json file contaning a single attribute hash wich is the build hash.

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