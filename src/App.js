import React, { useState, useEffect } from 'react'
import Button from './Button'
import ViewList from './ViewList'
import { bubble } from './SortingAlgorithms/bubble'
import { selection } from './SortingAlgorithms/selection'
import { insertion } from './SortingAlgorithms/insertion'
import { quickSetup } from './SortingAlgorithms/quick'
import { getMergeSortAnimations } from './SortingAlgorithms/merge'
import SliderInput from './SliderInput'
import './App.css'

const PRIMARY_COLOR = 'cyan'
const SECONDARY_COLOR = 'red'

function App() {
  const [SHOW, setSHOW] = useState(true)
  const [SIZE, setSIZE] = useState(50)
  const [TIME, setTIME] = useState(3)
  const [list, setList] = useState([])

  useEffect(() => {
    setArray()
    document.title = 'Sorting Algorithm'
  }, [])

  useEffect(() => {
    repopulate()
  }, [SIZE])

  const handleTimeChange = (value) => {
    setTIME(30 - value)
    console.log(TIME)
  }

  const repopulate = () => {
    setList([])
    setArray()
  }

  const setArray = () => {
    for (let a = 0; a <= SIZE; a++) {
      const random = numberRandom(501)
      setList((list) => [...list, random])
    }
  }

  const reset = () => {
    setList([])
    setArray()
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
    await setSHOW(false)

    const animations = getMergeSortAnimations(list)
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
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * TIME)
      }
      if (animations.length - 1 === i) {
        setTimeout(() => {
          setSHOW(true)
        }, animations.length * TIME)
      }
    }
  }

  const heap = () => {}

  return (
    <div>
      <h1 style={{ color: 'cyan', textAlign: 'center', marginTop: '20px' }}>
        Visual Sorting
      </h1>
      <Button
        show={SHOW}
        quit={quit}
        reset={reset}
        bubble={bubbleSort}
        selection={selectionSort}
        insertion={insertionSort}
        quick={quick}
        merge={merge}
        heap={heap}
      ></Button>

      <div className='inputs-container'>
        <SliderInput
          max={29}
          setValue={handleTimeChange}
          value={TIME}
          show={SHOW}
        >
          Speed Of Sorting
        </SliderInput>
        <SliderInput max={250} setValue={setSIZE} value={SIZE} show={SHOW}>
          Size of Array
        </SliderInput>
      </div>

      <ViewList list={list} size={SIZE}></ViewList>
    </div>
  )
}

const numberRandom = (limit) => {
  return Math.floor(Math.random() * limit) + 1
}

export default App
