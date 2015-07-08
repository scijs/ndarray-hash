ndarray-hash
============
A sparse ndarray backed by a map (implemented using either `Map` or an object).

[![build status](https://secure.travis-ci.org/scijs/ndarray-hash.png)](http://travis-ci.org/scijs/ndarray-hash)

## Example

```javascript
var ndhash = require("ndarray-hash")

//Create a gigantic sparse ndarray
var x = ndhash([10000, 10000])

x.set(100, 100, 1)

console.log(x.get(100, 1000))
console.log(x.get(100, 100))
```
#### Output
```
0
1
```

## Install
Install using [npm](https://www.npmjs.com/):

    npm install ndarray-hash

## API
#### `require("ndarray-hash")(shape)`
Creates an ndarray hash map with the given shape

* `shape` is the shape of the resulting sparse ndarray

**Returns** A sparse hash table backed ndarray

## License
(c) 2013 Mikola Lysenko. MIT License