import React from 'react'
import './App.css'

export default function SliderInput(props) {
  return (
    <div className='input_sliders'>
      <h3>{props.children}</h3>

      <input
        type='range'
        max={props.max}
        onChange={(e) => props.setValue(e.target.value)}
        className={`${props.show}`}
      />
    </div>
  )
}
