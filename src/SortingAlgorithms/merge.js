export function mergeSetup(array) {
  if (array.length <= 1) return array

  const animations = []
  const auxiliaryArray = array.slice()
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
  return animations
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations)
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations)
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx
  let i = startIdx
  let j = middleIdx + 1
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j])
    animations.push([i, j])
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]])
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      animations.push([k, auxiliaryArray[j]])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i])
    animations.push([i, i])
    animations.push([k, auxiliaryArray[i]])
    mainArray[k++] = auxiliaryArray[i++]
  }
  while (j <= endIdx) {
    animations.push([j, j])
    animations.push([j, j])
    animations.push([k, auxiliaryArray[j]])
    mainArray[k++] = auxiliaryArray[j++]
  }
}

// export async function mergeSetup() {
//   let arr = [2, 1, 3, 0]
//   let auxilaryArr = arr.slice()
//   console.log(arr)

//   divide(auxilaryArr, arr, 0, arr.length - 1)

//   console.log(arr)
// }

// function divide(auxilaryArr, arr, start, end) {
//   if (start >= end) return

//   let mid = Math.floor((start + end) / 2)

//   console.log(start, mid, end)

//   divide(auxilaryArr, arr, start, mid)
//   divide(auxilaryArr, arr, mid + 1, end)
//   add(auxilaryArr, arr, start, mid, end)
// }

// function add(auxilaryArr, arr, start, mid, end) {
//   let i = start
//   let k = start
//   let j = mid + 1

//   while (i <= mid && j <= end) {
//     if (auxilaryArr[i] <= auxilaryArr[j]) {
//       arr[k++] = auxilaryArr[i++]
//       // k++
//       // i++
//     } else {
//       arr[k++] = auxilaryArr[j++]
//       // k++
//       // j++
//     }
//   }

//   while (i <= mid) {
//     arr[k++] = auxilaryArr[i++]
//     // k++
//     // i++
//   }

//   while (j <= end) {
//     arr[k++] = auxilaryArr[j++]
//     // k++
//     // j++
//   }
// }
