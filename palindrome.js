function isPalindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1])
}

/**
 * info example abba -- SPLIT -- ['a', 'b', 'b', 'a'] for every is char === str length - index - 1  -- -1 bc starts at 0
 */

console.log(isPalindrome('abba'))
console.log(isPalindrome('nope'))