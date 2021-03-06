/* */ 
var _curry3 = require('./internal/_curry3');
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1,
      result = [],
      tuple = [acc];
  while (idx >= 0) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [tuple[0], result];
});
