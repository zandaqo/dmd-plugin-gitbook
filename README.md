[![view on npm](http://img.shields.io/npm/v/dmd-gitbook.svg)](https://www.npmjs.org/package/dmd-bitbucket)

# dmd-gitbook
Plugin for [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown) to produce markdown suitable for Gitbook.

## Install
```
$ npm install dmd-gitbook --save-dev
```

## Use
Pass the plug-in name to `jsdoc2md` or `dmd` when generating your docs:
```
$ jsdoc2md --plugin dmd-gitbook --files lib/*.js
```
