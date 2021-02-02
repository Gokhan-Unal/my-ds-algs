function vowels(str) {
  const matched = []
  const matches = str.match(/[aeiou]/gi)
  if (matches) {
    matched.push(...matches)
    return matched
  } else return 0
}

// or

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0
// }

console.log(vowels('Hi There'))
