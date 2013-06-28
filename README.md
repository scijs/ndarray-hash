ndarray-hash
============
A sparse ndarray backed by a hash map.

## Example

```javascript
var ndhash = require("ndarray-hash")

//Create a gigantic sparse ndarray
var x = ndhash([10000, 10000])

x.set(100, 100, 1)

console.log(x.get(100, 1000))
console.log(x.get(100, 100))
```

## Install

```sh
npm install ndarray-hash
```

### `require("ndarray-hash")(shape)`
Creates an ndarray hash map with the given shape

* `shape` is the shape of the resulting sparse ndarray

**Returns** A sparse hash table backed ndarray

## Credits
(c) 2013 Mikola Lysenko. MIT License