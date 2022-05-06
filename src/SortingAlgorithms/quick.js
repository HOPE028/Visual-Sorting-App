let auxilary
let animations = []

export async function quickSetup(list) {
  animations = []
  auxilary = [...list]

  if (auxilary.length <= 1) return animations

  await quick(0, auxilary.length - 1)

  animations.push([-1, -1, true, 0])

  return animations
}

async function quick(start, end) {
  if (start >= end) {
    return
  }
  let index = await partitionOfQuick(start, end)

  await Promise.all([quick(start, index - 1), quick(index + 1, end)])
}

async function partitionOfQuick(start, end) {
  let pivotValue = auxilary[end]
  let pivotIndex = start

  for (let a = start; a < end; a++) {
    animations.push([a, end, false, 1])
    animations.push([a, end, false, 2])
    if (auxilary[a] < pivotValue) {
      animations.push([a, pivotIndex, true, 0])
      await swap(a, pivotIndex)
      pivotIndex++
    }
  }
  animations.push([pivotIndex, end, true, 0])
  await swap(pivotIndex, end)

  return pivotIndex
}

async function swap(first, second) {
  const temp = auxilary[first]
  auxilary[first] = auxilary[second]
  auxilary[second] = temp
  return auxilary
}
