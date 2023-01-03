import React from 'react'
import './App.css'

export default function ViewList(props) {
  const BARWIDTH = 4

  return (
    <div className='box-container'>
      {BARWIDTH && (
        <div
          className='box'
          style={{
            width: `${
              props.size * BARWIDTH + props.size * 2 + BARWIDTH * 3 + 2
            }px`,
          }}
        >
          <div className='container'>
            {props.list &&
              props.list.map((item, index) => (
                <div
                  key={index}
                  style={{
                    height: `${item}px`,
                    width: `${BARWIDTH}px`,
                    background: 'cyan',
                  }}
                  className='bar'
                ></div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
