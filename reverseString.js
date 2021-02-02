function reverseString(str) {
  return str.split('').reduce((acc, single) => single + acc, '')
}

// another way

function reverseS(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString("Hi There"))
console.log(reverseS("Hi There"))