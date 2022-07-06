import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { List } from './List'
import { bubble } from './SortingAlgorithms/bubble'
import { selection } from './SortingAlgorithms/selection'
import { insertion } from './SortingAlgorithms/insertion'
import { quickSetup } from './SortingAlgorithms/quick'
import { mergeSetup } from './SortingAlgorithms/merge'
import './App.css'

const PRIMARY_COLOR = 'cyan'
const SECONDARY_COLOR = 'red'

function App() {
  const [SHOW, setSHOW] = useState(true)
  const [VOLUME, setVOLUME] = useState(false)
  const [SIZE, setSIZE] = useState(220)
  const [TIME, setTIME] = useState(3)
  const [list, setList] = useState([])

  useEffect(() => {
    setArraySize()
    document.title = 'Sorting Algorithm'
  }, [])

  const changeVolume = () => {
    setVOLUME(!VOLUME)
  }

  const setArraySize = () => {
    for (let a = 0; a <= SIZE; a++) {
      const random = numberRandom(501)
      setList((list) => [...list, random])
    }
  }

  const reset = () => {
    setList([])
    setArraySize()
  }

  const quit = () => {
    window.location.reload(false)
  }

  const swap = (first, second) => {
    const temp = list[first]
    list[first] = list[second]
    list[second] = temp
    setList([...list])
  }

  const bubbleSort = () => {
    setSHOW(false)
    const animations = bubble(list)

    for (let a = 0; a < animations.length; a++) {
      const arrayBars = document.getElementsByClassName('bar')
      const [message] = animations[a]
      if (a % 3 !== 2 && message !== 'Sorted') {
        const [barOneIndex, barTwoIndex] = animations[a]
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        const color = a % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, TIME * a)
      } else {
        if (animations[a].length === 2) {
          const [barOne, barTwo] = animations[a]
          setTimeout(() => {
            swap(barOne, barTwo)
          }, TIME * a)
        } else {
          const [string] = animations[a]
          if (string === 'Sorted') {
            setTimeout(() => {
              setSHOW(true)
            }, TIME * animations.length)
          }
        }
      }
    }
  }

  const selectionSort = () => {
    setSHOW(false)
    const animations = selection(list)

    for (let a = 0; a < animations.length; a++) {
      const arrayBars = document.getElementsByClassName('bar')
      const [barOneIndex, barTwoIndex, shouldSwap, timeRan] = animations[a]
      if (!shouldSwap) {
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        const color = timeRan === 1 ? SECONDARY_COLOR : PRIMARY_COLOR

        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, TIME * a)
      } else {
        if (barOneIndex !== -1) {
          setTimeout(() => {
            swap(barOneIndex, barTwoIndex)
          }, TIME * a)
        } else {
          setTimeout(() => {
            setSHOW(true)
          }, TIME * animations.length)
        }
      }
    }
  }

  const insertionSort = () => {
    setSHOW(false)
    const animations = insertion(list)

    for (let a = 0; a < animations.length; a++) {
      const arrayBars = document.getElementsByClassName('bar')
      const [barOneIndex, barTwoIndex, shouldSwap, timeRan] = animations[a]
      if (!shouldSwap) {
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        const color = timeRan === 1 ? SECONDARY_COLOR : PRIMARY_COLOR
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, TIME * a)
      } else {
        if (barOneIndex !== -1) {
          setTimeout(() => {
            list[barOneIndex] = barTwoIndex
            setList([...list])
          }, TIME * a)
        } else {
          setTimeout(() => {
            setSHOW(true)
          }, TIME * animations.length)
        }
      }
    }
  }

  const quick = async () => {
    setSHOW(false)
    let animations = []
    animations = await quickSetup(list)

    for (let a = 0; a < animations.length; a++) {
      const arrayBars = document.getElementsByClassName('bar')
      const [barOneIndex, barTwoIndex, shouldSwap, timeRan] = animations[a]

      if (!shouldSwap) {
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        const color = timeRan === 1 ? SECONDARY_COLOR : PRIMARY_COLOR
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, TIME * a)
      } else {
        if (barOneIndex !== -1) {
          setTimeout(() => {
            swap(barOneIndex, barTwoIndex)
          }, TIME * a)
        } else {
          setTimeout(() => {
            setSHOW(true)
          }, TIME * animations.length)
        }
      }
    }
  }

  const merge = async () => {
    // setSHOW(false)
    let animations = await mergeSetup(list)

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar')
      const isColorChange = i % 3 !== 2
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * TIME)
      } else {
        const [barOneIdx, newHeight] = animations[i]
        if (barOneIdx != -1) {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style
            barOneStyle.height = `${newHeight}px`
          }, i * TIME)
        } else {
          setTimeout(() => {
            // setSHOW(true)
            console.log('HERE')
          }, TIME * animations.length)
        }
      }
    }
  }

  const heap = () => {}

  return (
    <div>
      <Button
        volume={VOLUME}
        show={SHOW}
        quit={quit}
        changeVolume={changeVolume}
        reset={reset}
        bubble={bubbleSort}
        selection={selectionSort}
        insertion={insertionSort}
        quick={quick}
        merge={merge}
        heap={heap}
      ></Button>

      <List list={list}></List>
    </div>
  )
}

const numberRandom = (limit) => {
  return Math.floor(Math.random() * limit) + 1
}

export default App
