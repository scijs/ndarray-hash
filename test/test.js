var ndhash = require("../ndhash.js")

require("tape")("ndarray-hash", function(t) {
  var x = ndhash([100000, 10000])

  for(var i=0; i<x.shape[1]; i++) {
    x.set(i+1, i, 1)
    x.set(i+2, i, 0)
  }
  
  t.equals(x.get(11, 10), 1)
  t.equals(x.get(10, 10), 0)
  t.equals(x.get(10, 11), 0)
  t.equals(x.get(12, 10), 0)
  t.equals(x.get(1000, 100), 0)
  
  t.end()
})