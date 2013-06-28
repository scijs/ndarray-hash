"use strict"

var ndarray = require("ndarray")

function HashMap(n) {
  this.length = n
  this.store = {}
}
HashMap.prototype.get = function(i) {
  return this.store[i] || 0
}
HashMap.prototype.set = function(i,v) {
  return this.store[i] = v
}

function createNDHash(shape) {
  var sz = 1
  for(var i=0; i<shape.length; ++i) {
    sz *= shape[i]
  }
  return ndarray(new HashMap(sz), shape)
}

module.exports = createNDHash