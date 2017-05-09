# dmd-plugin-gitbook
[![view on npm](http://img.shields.io/npm/v/dmd-plugin-gitbook.svg)](https://www.npmjs.org/package/dmd-plugin-gitbook)

Plugin for [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown) to produce markdown suitable for Gitbook.

## Install
```
$ npm install dmd-plugin-gitbook --save-dev
```

## Use
Pass the plugin name to `jsdoc2md` or `dmd` when generating your docs:
```
$ jsdoc2md --plugin dmd-plugin-gitbook --files lib/*.js
```
