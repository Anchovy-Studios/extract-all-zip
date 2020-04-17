# extract-all-zip

![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/extract-zip) ![npm](https://img.shields.io/npm/v/extract-all-zip) ![npm bundle size](https://img.shields.io/bundlephobia/min/extract-all-zip) ![GitHub issues](https://img.shields.io/github/issues/anchovy-studios/extract-all-zip) ![NPM](https://img.shields.io/npm/l/extract-all-zip)

Extract all zip within a directory recursively.

## Requirement

[Node.js](https://nodejs.org/en/) 10.0.0 or higher

## Installation

Installation is done using the npm install command:
```bash
$ npm install extract-all-zip
```

## Quick Start

```javascript
const { extract } = require('extract-all-zip')

const path = 'path.to.your.folder'
try {
    const files = extract(path)
    console.log(files)
} catch (err) {
    console.error(err)
}
```

## Documentation

### Exception
The `extract` function will throw `ExtractException` object if there is an error during extraction or the path to the folder is invalid.

To get the exception message you can access its attribute:
```javascript
try {
    ...
} catch (err) {
    console.error(err.message)
}
```

To get the native exception object or library dependency exception you can access its attribute:
```javascript
try {
    ...
} catch (err) {
    console.error(err.errObj)
}
```

### Return
The `extract` function will return a list of string which is the path of the zip file upon successfull extraction.

```bash
[
  'path.to.file-one.zip',
  'path.to.file-two.zip',
  'path.to.file-three.zip'
  ...
]
```

## Dependency

- [extract-zip](https://www.npmjs.com/package/extract-zip)

## Change History
[CHANGELOG](CHANGELOG)

## License

[MIT](LICENSE)