export function insertion(list) {
  let animations = []

  const auxilary = [...list]

  if (auxilary.length <= 1) return animations

  const size = auxilary.length

  for (let a = 0; a < size; a++) {
    let n = a
    let found = false
    let value = auxilary[a]

    while (n !== 0 && !found) {
      n--
      animations.push([a, n, false, 1])
      animations.push([a, n, false, 2])
      if (auxilary[n] > value) {
        auxilary[n + 1] = auxilary[n]
        animations.push([n + 1, auxilary[n], true, 0])
      } else {
        found = true
        auxilary[n + 1] = value
        animations.push([n + 1, value, true, 0])
      }
    }
    if (n === 0 && a !== 0 && !found) {
      auxilary[0] = value
      animations.push([0, value, true, 0])
    }
  }

  animations.push([-1, -1, true, 0])

  return animations
}
