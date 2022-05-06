export function bubble(list) {
  let animations = []

  const auxilary = [...list]

  if (auxilary.length <= 1) return animations

  const size = auxilary.length
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let b = 1; b < size; b++) {
      animations.push([b - 1, b])
      animations.push([b - 1, b])
      if (auxilary[b - 1] > auxilary[b]) {
        animations.push([b - 1, b])

        const temp = auxilary[b - 1]
        auxilary[b - 1] = auxilary[b]
        auxilary[b] = temp

        sorted = false
      } else {
        animations.push(['No'])
      }
    }
  }
  animations.push(['Sorted'])

  return animations
}
