function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j])
        // swap
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return arr
}

const bubble = [2, 5, 25, 13, 1, 8]

// how
// i = 0 j = 0

console.log(bubbleSort(bubble))
