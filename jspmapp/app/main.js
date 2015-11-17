import { range, reduce } from 'ramda'

var numbers = [7, 12, 4, 51, 23]

var add = function (x, y) {
  return x + y
}

var sum = reduce(add, 0, numbers)

console.log('sum =', sum)

console.log('range =', range(5, 15).toString())
