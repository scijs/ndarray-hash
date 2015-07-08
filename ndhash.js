"use strict"

var ndarray = require("ndarray")
var useMaps = !(typeof Map === "undefined")

function HashMap(n) {
  this.length = n
  this.store = useMaps ? new Map() : {}
}

if (useMaps) {
  HashMap.prototype.get = function(i) {
    return this.store.get(i) || 0
  }
  HashMap.prototype.set = function(i,v) {
    if (v===0) {
      this.store.delete(i)
    } else {
      this.store.set(i, v)
    }
    return v
  }
} else { // Using a polyfill would be neater, but this works as well 
  HashMap.prototype.get = function(i) {
    return this.store[i] || 0
  }
  HashMap.prototype.set = function(i,v) {
    if (v===0) {
      delete this.store[i]
    } else {
      this.store[i] = v
    }
    return v
  }
}

function createNDHash(shape) {
  var sz = 1
  for(var i=0; i<shape.length; ++i) {
    sz *= shape[i]
  }
  return ndarray(new HashMap(sz), shape)
}

module.exports = createNDHash