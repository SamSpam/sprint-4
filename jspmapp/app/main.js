import R from 'ramda'

var numbers = [7, 12, 4, 51, 23]

var add = function (x, y) {
  return x + y
}

var sum = R.reduce(add, 0, numbers)

console.log('sum =', sum)
