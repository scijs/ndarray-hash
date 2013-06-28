var ndhash = require("../ndhash.js")

require("tape")("ndarray-hash", function(t) {
  var x = ndhash([10000, 1000])
  
  x.set(10, 10, 1)
  
  t.equals(x.get(10,10), 1)
  t.equals(x.get(1000, 100), 0)
  
  t.end()
})