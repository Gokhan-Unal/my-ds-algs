// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function slowFib(number) {
  if (number < 2) {
    return number
  }
  return slowFib(number - 1) + slowFib(number - 2)
}

console.log('slow', slowFib(40))

const fastFib = memoize(slowFib)
console.log('fastFib', fastFib(40))

function memoize(fn) {
  const cache = {}
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    console.log('result', result)
    cache[args] = result
    return result
  }
}
