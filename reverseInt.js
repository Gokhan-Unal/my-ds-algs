function reverseInt(num) {
  const reversed = num
    .toString()
    .split('')
    .reverse()
    .join('')

    console.log(parseInt(reversed))
    // Math.sign(num) işaretini belirle
  return parseInt(reversed) * Math.sign(num)
}

console.log(reverseInt(15))
console.log(reverseInt(6))
console.log(reverseInt(361))
console.log(reverseInt(-61))
