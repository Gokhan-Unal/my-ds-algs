function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([67, 32, 33, 12, 45, 9, 13]))

function merge(left, right) {
  const results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // console.log('left', left[0])
      results.push(left.shift())
    } else {
      // console.log('right', right[0])
      results.push(right.shift())
    }
  }

  return [...results, ...left, ...right]
}

console.log(merge([5, 6, 7, 24, 3], [1, 2, 3, 4, 17]))

// info [1, 6, 4, 24, 3], [1, 2, 3, 4, 17]
// tek tek baştakı elemanı çıkart küçüklüğe göre
