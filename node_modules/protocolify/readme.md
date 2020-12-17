# protocolify [![Build Status](https://travis-ci.org/sindresorhus/protocolify.svg?branch=master)](https://travis-ci.org/sindresorhus/protocolify)

> Prepend `http://` to humanized URLs like `todomvc.com` and `file://` to file paths

Useful when you want to accept either a local file or URL as argument in your CLI app.


## Install

```
$ npm install --save protocolify
```


## Usage

```js
const protocolify = require('protocolify');

protocolify('todomvc.com');
//=> 'http://todomvc.com'

protocolify('localhost');
//=> 'http://localhost'

protocolify('http://todomvc.com');
//=> 'http://todomvc.com'

// if it exists on disk it will be interpreted as a file and not an URL
protocolify('index.js');
//=> 'file:///Users/sindresorhus/dev/protocolify/index.js'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
