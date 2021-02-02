function capitalizeEachWord(str) {
  const words = []
  // info key point  -----------⬇
  for (const word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  return words.join(' ')
}

console.log(
  capitalizeEachWord(
    "It's not the strongest species that survive, nor the most intelligent, but the most responsive to change"
  )
)

