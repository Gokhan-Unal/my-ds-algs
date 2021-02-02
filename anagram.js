// info /[^\w]/g anlami , . boşluk gibi karakterleri çıkar.
function cleanUp(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

function isAnagram(str1, str2) {
  return cleanUp(str1) === cleanUp(str2)
}

const str1 = 'rail safety'
const str2 = 'fairy tales'
const str3 = 'i guess not'
console.log(isAnagram(str1, str2))
console.log(isAnagram(str1, str3))
