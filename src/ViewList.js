import React from 'react'
import './App.css'

export default function ViewList(props) {
  return (
    <div className='box-container'>
      <div className='box'>
        <div className='container'>
          {props.list &&
            props.list.map((items, index) => (
              <div
                key={index}
                style={{
                  height: `${items}px`,
                  width: '4px',
                  background: 'cyan',
                }}
                className='bar'
              ></div>
            ))}
        </div>
      </div>
    </div>
  )
}
