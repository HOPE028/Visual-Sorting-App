import React from 'react'
import './App.css'

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className='box-container'>
        <div className='box'>
          <div className='container'>
            {this.props.list.map((items, index) => (
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
}
