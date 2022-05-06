export function selection(list) {
  let animations = []

  const auxilary = [...list]

  if (auxilary.length <= 1) return animations

  const size = auxilary.length

  for (let a = 0; a < size; a++) {
    let min = a
    for (let b = a + 1; b < size; b++) {
      animations.push([a, b, false, 1])
      animations.push([a, b, false, 2])
      if (auxilary[b] < auxilary[min]) {
        min = b
      }
    }
    if (min !== a) {
      const temp = auxilary[min]
      auxilary[min] = auxilary[a]
      auxilary[a] = temp
      animations.push([min, a, true, 0])
    }
  }

  animations.push([-1, -1, true, 0])

  return animations
}
