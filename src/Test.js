import React, { useState, useEffect } from 'react'

export default function Test() {
  // const [list, setList] = useState([9, 8, 6, 5, 2, 1])
  let list = [9, 8, 6, 5, 2, 1]
  let heapSize
  let largest

  useEffect = () => {
    console.log(list)
  }

  const heapSort = () => {
    buildHeap()
    for (let a = list.length; a > 1; a--) {
      // swap(1, a)
      let temp = list[1]
      list[1] = list[a]
      list[a] = list[1]
      heapify(1)
    }
    console.log(list)
  }

  const buildHeap = () => {
    heapSize = list.length
    for (let i = Math.floor(heapSize / 2); i > 0; i--) {
      heapify(i)
    }
  }

  const heapify = (i) => {
    let left = i * 2
    let right = i * 2 + 1

    if (left <= heapSize && list[left] > list[i]) {
      largest = left
    } else {
      largest = i
    }

    if (right <= heapSize && list[right] > list[largest]) {
      largest = right
    }
    if (largest != i) {
      // swap(i, largest)
      let temp = list[i]
      list[i] = list[largest]
      list[largest] = list[i]
      heapify(largest)
    }
  }

  const swap = (first, second) => {
    let temp = list[first]
    list[first] = list[second]
    list[second] = temp
  }

  return (
    <div>
      <button onClick={() => heapSort()}></button>
      <h1>{list}</h1>
    </div>
  )
}
